"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const model_1 = require("../../global/model");
class ProductServices {
    async create(body) {
        try {
            const product = await model_1.Product.create(body);
            return product;
        }
        catch (error) {
            throw error;
        }
    }
    async AllProducts() {
        try {
            const products = await model_1.Product.find({});
            return products;
        }
        catch (error) {
            throw error;
        }
    }
    async singleProduct(param) {
        try {
            const product = await model_1.Product.findById(param);
            if (!product) {
                throw new Error("Product not found");
            }
            return product;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.ProductServices = ProductServices;
//# sourceMappingURL=services.js.map