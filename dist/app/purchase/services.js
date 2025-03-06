"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../../global/config");
const model_1 = require("../../global/model");
const services_1 = require("../sales/services");
const salesServices = new services_1.SalesServices();
class PurchaseServices {
    async create(body, user) {
        const session = await mongoose_1.default.startSession();
        session.startTransaction();
        try {
            if (body.quantity <= 0 || body.quantity > config_1.config.MAX_PURCHASE_PER_USER) {
                await session.abortTransaction();
                session.endSession();
                throw new Error(`Invalid quantity. Maximum allowed: ${config_1.config.MAX_PURCHASE_PER_USER}`);
            }
            const sale = await model_1.Sales.findById(body.saleId).session(session);
            if (!sale) {
                await session.abortTransaction();
                session.endSession();
                throw new Error("Sale not found");
            }
            if (!salesServices.checkActive(sale._id)) {
                await session.abortTransaction();
                session.endSession();
                throw new Error("This sale is not currently active");
            }
            const existingPurchase = await model_1.Purchase.findOne({
                user: user._id,
                sale: body.saleId,
            }).session(session);
            if (existingPurchase) {
                await session.abortTransaction();
                session.endSession();
                throw new Error("You have already purchased from this sale");
            }
            const updatedSale = await model_1.Sales.findOneAndUpdate({
                _id: body.saleId,
                remainingInventory: { $gte: body.quantity },
            }, {
                $inc: { remainingInventory: -body.quantity },
            }, {
                new: true,
                session,
            });
            if (!updatedSale) {
                await session.abortTransaction();
                session.endSession();
                throw new Error("Out of stock or sale is no longer active");
            }
            const purchase = await model_1.Purchase.create([
                {
                    user: user._id,
                    sale: body.saleId,
                    product: sale.product,
                    quantity: body.quantity,
                    purchaseTime: new Date(),
                },
            ], { session });
            if (updatedSale.remainingInventory === 0) {
                updatedSale.isActive = false;
                await updatedSale.save({ session });
            }
            await session.commitTransaction();
            session.endSession();
            return {
                purchase: purchase[0],
                remainingInventory: updatedSale.remainingInventory,
            };
        }
        catch (err) {
            throw err;
        }
    }
}
exports.PurchaseServices = PurchaseServices;
//# sourceMappingURL=services.js.map