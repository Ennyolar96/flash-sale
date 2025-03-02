import { Product, Purchase, Sales } from "@/global/model";
import { createSale } from "./sales.interface";
import { config } from "@/global/config";
import { Types } from "mongoose";

export class SalesServices {
  async create(body: createSale) {
    try {
      const product = await Product.findById(body.product);
      if (!product) {
        throw new Error("Product not found");
      }

      const sale = await Sales.create({
        ...body,
        totalInventory:
          body.totalInventory ||
          product.defaultQuantity ||
          config.DEFAULT_PRODUCT_QUANTITY,
        remainingInventory:
          body.totalInventory ||
          product.defaultQuantity ||
          config.DEFAULT_PRODUCT_QUANTITY,
        isActive: false,
      });

      await sale.populate("product");

      return sale;
    } catch (error) {
      throw error;
    }
  }

  async getActiveSale() {
    try {
      const now = new Date();
      console.log(now);
      const sale = await Sales.findOne({
        isActive: true,
        startTime: { $lte: now },
        remainingInventory: { $gt: 0 },
      }).populate("product");

      if (!sale) {
        throw new Error("No active flash sale at the moment");
      }
      return sale;
    } catch (error) {
      throw error;
    }
  }

  async activateSale(param: Types.ObjectId) {
    try {
      const sale = await Sales.findById(param);
      if (!sale) {
        throw new Error("Sale not found");
      }

      // deactivate any currently active sales
      await Sales.updateMany({ isActive: true }, { isActive: false });

      sale.isActive = true;
      await sale.save();
      await sale.populate("product");

      return sale;
    } catch (error) {
      throw error;
    }
  }

  async checkActive(id: Types.ObjectId) {
    const now = new Date();
    const sale = await Sales.findById(id);
    return (
      sale.isActive && sale.startTime <= now && sale.remainingInventory > 0
    );
  }

  async getLeaderboard(param: Types.ObjectId) {
    try {
      const sale = await Sales.findById(param);
      if (!sale) {
        throw new Error("Sale not found");
      }
      const purchases = await Purchase.find({ sale: param })
        .sort({ purchaseTime: 1 })
        .populate({
          path: "user",
          select: "name email",
        })
        .select("user quantity purchaseTime");

      return purchases;
    } catch (err) {
      throw err;
    }
  }

  async resetSaleInventory(param: Types.ObjectId) {
    try {
      const sale = await Sales.findById(param);

      if (!sale) {
        throw new Error("Sale not found");
      }

      // Reset remaining inventory to total inventory
      sale.remainingInventory = sale.totalInventory;
      await sale.save();

      // Delete all purchases for this sale
      await Purchase.deleteMany({ sale: sale._id });

      return sale;
    } catch (err) {
      throw err;
    }
  }
}
