import mongoose from "mongoose";
import { newPurchase } from "./purchase.interface";
import { IUser } from "../user";
import { config } from "@/global/config";
import { Purchase, Sales } from "@/global/model";
import { SalesServices } from "../sales/services";

const salesServices = new SalesServices();
export class PurchaseServices {
  async create(body: newPurchase, user: Omit<IUser, "password">) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      if (body.quantity <= 0 || body.quantity > config.MAX_PURCHASE_PER_USER) {
        await session.abortTransaction();
        session.endSession();
        throw new Error(
          `Invalid quantity. Maximum allowed: ${config.MAX_PURCHASE_PER_USER}`
        );
      }

      // Check if the specified sale exists and is active
      const sale = await Sales.findById(body.saleId).session(session);

      if (!sale) {
        await session.abortTransaction();
        session.endSession();
        throw new Error("Sale not found");
      }

      // Check if sale is active
      if (!salesServices.checkActive(sale._id)) {
        await session.abortTransaction();
        session.endSession();
        throw new Error("This sale is not currently active");
      }

      // Check if user already purchased in this sale
      const existingPurchase = await Purchase.findOne({
        user: user._id,
        sale: body.saleId,
      }).session(session);

      if (existingPurchase) {
        await session.abortTransaction();
        session.endSession();
        throw new Error("You have already purchased from this sale");
      }

      // Check if there's enough inventory with optimistic concurrency control
      const updatedSale = await Sales.findOneAndUpdate(
        {
          _id: body.saleId,
          remainingInventory: { $gte: body.quantity },
        },
        {
          $inc: { remainingInventory: -body.quantity },
        },
        {
          new: true,
          session,
        }
      );

      if (!updatedSale) {
        await session.abortTransaction();
        session.endSession();
        throw new Error("Out of stock or sale is no longer active");
      }

      // Creating a purchase record
      const purchase = await Purchase.create(
        [
          {
            user: user._id,
            sale: body.saleId,
            product: sale.product,
            quantity: body.quantity,
            purchaseTime: new Date(),
          },
        ],
        { session }
      );

      // Deactivate sale if out of stock
      if (updatedSale.remainingInventory === 0) {
        updatedSale.isActive = false;
        await updatedSale.save({ session });
      }

      await session.commitTransaction();
      session.endSession();

      return {
        purchase: purchase[0],
        remainingInventory: updatedSale.remainingInventory,
      };
    } catch (err) {
      throw err;
    }
  }
}
