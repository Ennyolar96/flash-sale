"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sales = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config");
const SaleSchema = new mongoose_1.default.Schema({
    product: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    startTime: {
        type: Date,
        required: true,
    },
    totalInventory: {
        type: Number,
        required: true,
        default: config_1.config.DEFAULT_PRODUCT_QUANTITY,
    },
    remainingInventory: {
        type: Number,
        required: true,
        default: config_1.config.DEFAULT_PRODUCT_QUANTITY,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
SaleSchema.index({ product: 1, isActive: 1 });
SaleSchema.index({ startTime: 1 });
SaleSchema.statics.createIndexes = async function () {
    await this.collection.createIndex({ product: 1, isActive: 1 });
    await this.collection.createIndex({ startTime: 1 });
};
exports.Sales = mongoose_1.default.model("Sale", SaleSchema);
//# sourceMappingURL=sales.model.js.map