"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesController = void 0;
const services_1 = require("./services");
const class_transformer_1 = require("class-transformer");
const sale_dto_1 = require("./sale.dto");
const class_validator_1 = require("class-validator");
const salesService = new services_1.SalesServices();
class SalesController {
    async create(req, res) {
        try {
            const body = (0, class_transformer_1.plainToInstance)(sale_dto_1.CreateSales, req.body);
            const errors = await (0, class_validator_1.validate)(body, {
                whitelist: true,
                forbidNonWhitelisted: true,
            });
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
            const createSales = await salesService.create(body);
            res.status(200).json({ success: true, status: 200, data: createSales });
        }
        catch (error) {
            console.error(error);
            const message = error.message || "Internal server error";
            const code = error.statusCode ? error.statusCode : 500;
            res.status(code).json({ success: false, error: message });
            return;
        }
    }
    async getActiveSale(req, res) {
        try {
            const product = await salesService.getActiveSale();
            res.status(200).json({
                success: true,
                status: 200,
                data: product,
            });
        }
        catch (error) {
            console.error(error);
            const message = error.message || "Internal server error";
            const code = error.statusCode ? error.statusCode : 500;
            res.status(code).json({ success: false, error: message });
            return;
        }
    }
    async activateSale(req, res) {
        try {
            const param = (0, class_transformer_1.plainToInstance)(sale_dto_1.SingleSales, req.params);
            const errors = await (0, class_validator_1.validate)(param, {
                whitelist: true,
                forbidNonWhitelisted: true,
            });
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
            const product = await salesService.activateSale(param.id);
            res.status(200).json({
                success: true,
                status: 200,
                data: product,
            });
        }
        catch (error) {
            console.error(error);
            const message = error.message || "Internal server error";
            const code = error.statusCode ? error.statusCode : 500;
            res.status(code).json({ success: false, error: message });
            return;
        }
    }
    async getLeaderboard(req, res) {
        try {
            const param = (0, class_transformer_1.plainToInstance)(sale_dto_1.SingleSales, req.params);
            const errors = await (0, class_validator_1.validate)(param, {
                whitelist: true,
                forbidNonWhitelisted: true,
            });
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
            const product = await salesService.getLeaderboard(param.id);
            res.status(200).json({
                success: true,
                status: 200,
                data: product,
            });
        }
        catch (error) {
            console.error(error);
            const message = error.message || "Internal server error";
            const code = error.statusCode ? error.statusCode : 500;
            res.status(code).json({ success: false, error: message });
            return;
        }
    }
    async resetSaleInventory(req, res) {
        try {
            const param = (0, class_transformer_1.plainToInstance)(sale_dto_1.SingleSales, req.params);
            const errors = await (0, class_validator_1.validate)(param, {
                whitelist: true,
                forbidNonWhitelisted: true,
            });
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
            const product = await salesService.resetSaleInventory(param.id);
            res.status(200).json({
                success: true,
                status: 200,
                data: product,
            });
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
exports.SalesController = SalesController;
//# sourceMappingURL=controller.js.map