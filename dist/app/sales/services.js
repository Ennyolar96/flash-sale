"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesServices = void 0;
const model_1 = require("../../global/model");
const config_1 = require("../../global/config");
class SalesServices {
    async create(body) {
        try {
            const product = await model_1.Product.findById(body.product);
            if (!product) {
                throw new Error("Product not found");
            }
            const sale = await model_1.Sales.create({
                ...body,
                totalInventory: body.totalInventory ||
                    product.defaultQuantity ||
                    config_1.config.DEFAULT_PRODUCT_QUANTITY,
                remainingInventory: body.totalInventory ||
                    product.defaultQuantity ||
                    config_1.config.DEFAULT_PRODUCT_QUANTITY,
                isActive: false,
            });
            await sale.populate("product");
            return sale;
        }
        catch (error) {
            throw error;
        }
    }
    async getActiveSale() {
        try {
            const now = new Date();
            console.log(now);
            const sale = await model_1.Sales.findOne({
                isActive: true,
                startTime: { $lte: now },
                remainingInventory: { $gt: 0 },
            }).populate("product");
            if (!sale) {
                throw new Error("No active flash sale at the moment");
            }
            return sale;
        }
        catch (error) {
            throw error;
        }
    }
    async activateSale(param) {
        try {
            const sale = await model_1.Sales.findById(param);
            if (!sale) {
                throw new Error("Sale not found");
            }
            await model_1.Sales.updateMany({ isActive: true }, { isActive: false });
            sale.isActive = true;
            await sale.save();
            await sale.populate("product");
            return sale;
        }
        catch (error) {
            throw error;
        }
    }
    async checkActive(id) {
        const now = new Date();
        const sale = await model_1.Sales.findById(id);
        return (sale.isActive && sale.startTime <= now && sale.remainingInventory > 0);
    }
    async getLeaderboard(param) {
        try {
            const sale = await model_1.Sales.findById(param);
            if (!sale) {
                throw new Error("Sale not found");
            }
            const purchases = await model_1.Purchase.find({ sale: param })
                .sort({ purchaseTime: 1 })
                .populate({
                path: "user",
                select: "name email",
            })
                .select("user quantity purchaseTime");
            return purchases;
        }
        catch (err) {
            throw err;
        }
    }
    async resetSaleInventory(param) {
        try {
            const sale = await model_1.Sales.findById(param);
            if (!sale) {
                throw new Error("Sale not found");
            }
            sale.remainingInventory = sale.totalInventory;
            await sale.save();
            await model_1.Purchase.deleteMany({ sale: sale._id });
            return sale;
        }
        catch (err) {
            throw err;
        }
    }
}
exports.SalesServices = SalesServices;
//# sourceMappingURL=services.js.map