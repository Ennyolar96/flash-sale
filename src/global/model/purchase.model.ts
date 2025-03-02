import mongoose from "mongoose";

const PurchaseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    sale: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sale",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
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
  },
  {
    timestamps: true,
  }
);

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

export const Purchase = mongoose.model("Purchase", PurchaseSchema);
