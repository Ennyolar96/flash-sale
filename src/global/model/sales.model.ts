import mongoose from "mongoose";
import { config } from "../config";

const SaleSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
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
      default: config.DEFAULT_PRODUCT_QUANTITY,
    },
    remainingInventory: {
      type: Number,
      required: true,
      default: config.DEFAULT_PRODUCT_QUANTITY,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

SaleSchema.index({ product: 1, isActive: 1 });
SaleSchema.index({ startTime: 1 });

SaleSchema.statics.createIndexes = async function () {
  await this.collection.createIndex({ product: 1, isActive: 1 });
  await this.collection.createIndex({ startTime: 1 });
};

export const Sales = mongoose.model("Sale", SaleSchema);
