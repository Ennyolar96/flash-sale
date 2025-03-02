"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseController = void 0;
const services_1 = require("./services");
const class_transformer_1 = require("class-transformer");
const purchase_dto_1 = require("./purchase.dto");
const class_validator_1 = require("class-validator");
const purchaseServices = new services_1.PurchaseServices();
class PurchaseController {
    async create(req, res) {
        try {
            const body = (0, class_transformer_1.plainToInstance)(purchase_dto_1.NewPurchase, req.body);
            const errors = await (0, class_validator_1.validate)(body);
            if (errors.length > 0) {
                const formattedErrors = errors.map((error) => ({
                    property: error.property,
                    message: error.constraints,
                }));
                res.status(422).json({
                    success: false,
                    status: 422,
                    error: formattedErrors,
                });
                return;
            }
            const purchase = await purchaseServices.create(body, req.user);
            res.status(200).json({ success: true, status: 200, data: purchase });
        }
        catch (error) {
            console.error(error);
            const message = error.message || "Internal server error";
            const code = error.statusCode ? error.statusCode : 500;
            res.status(code).json({ success: false, error: message });
            return;
        }
    }
}
exports.PurchaseController = PurchaseController;
//# sourceMappingURL=controller.js.map