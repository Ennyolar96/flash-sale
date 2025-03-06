"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const services_1 = require("./services");
const class_transformer_1 = require("class-transformer");
const product_dto_1 = require("./product.dto");
const class_validator_1 = require("class-validator");
const productService = new services_1.ProductServices();
class ProductController {
    async create(req, res) {
        try {
            const body = (0, class_transformer_1.plainToInstance)(product_dto_1.CreateProduct, req.body);
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
            const product = await productService.create(body);
            res.status(200).json({ success: true, status: 200, data: product });
        }
        catch (error) {
            console.error(error);
            const message = error.message || "Internal server error";
            const code = error.statusCode ? error.statusCode : 500;
            res.status(code).json({ success: false, error: message });
            return;
        }
    }
    async findAllProduct(req, res) {
        try {
            const product = await productService.AllProducts();
            res.status(200).json({ success: true, status: 200, data: product });
        }
        catch (error) {
            console.error(error);
            const message = error.message || "Internal server error";
            const code = error.statusCode ? error.statusCode : 500;
            res.status(code).json({ success: false, error: message });
            return;
        }
    }
    async getSingleProduct(req, res) {
        try {
            const param = (0, class_transformer_1.plainToInstance)(product_dto_1.SingleProduct, req.params);
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
            const product = await productService.singleProduct(param.id);
            res.status(200).json({ success: true, status: 200, data: product });
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
exports.ProductController = ProductController;
//# sourceMappingURL=controller.js.map