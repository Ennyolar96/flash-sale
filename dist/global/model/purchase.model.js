"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purchase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const PurchaseSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    sale: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Sale",
        required: true,
    },
    product: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
        min: [1, "Quantity must be at least 1"],
    },
    purchaseTime: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});
PurchaseSchema.index({ sale: 1, user: 1 }, { unique: true });
PurchaseSchema.index({ purchaseTime: 1 });
PurchaseSchema.index({ sale: 1, purchaseTime: 1 });
PurchaseSchema.statics.findAllForSale = async function (saleId) {
    return this.find({ sale: saleId })
        .sort({ purchaseTime: 1 })
        .populate("user", "name email")
        .populate("product", "name price");
};
PurchaseSchema.statics.createIndexes = async function () {
    await this.collection.createIndex({ sale: 1, user: 1 }, { unique: true });
    await this.collection.createIndex({ purchaseTime: 1 });
    await this.collection.createIndex({ sale: 1, purchaseTime: 1 });
};
exports.Purchase = mongoose_1.default.model("Purchase", PurchaseSchema);
//# sourceMappingURL=purchase.model.js.map