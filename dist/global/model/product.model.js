"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Please add a product name"],
        trim: true,
        maxlength: [100, "Name cannot be more than 100 characters"],
    },
    description: {
        type: String,
        required: [true, "Please add a description"],
    },
    price: {
        type: Number,
        required: [true, "Please add a price"],
        min: [0, "Price must be positive"],
    },
    defaultQuantity: {
        type: Number,
        required: [true, "Please add a default quantity"],
        default: 200,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
exports.Product = mongoose_1.default.model("Product", ProductSchema);
//# sourceMappingURL=product.model.js.map