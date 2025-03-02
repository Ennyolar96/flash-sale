import mongoose from "mongoose";
import { newPurchase } from "./purchase.interface";
import { IUser } from "../user";
export declare class PurchaseServices {
    create(body: newPurchase, user: Omit<IUser, "password">): Promise<{
        purchase: mongoose.Document<unknown, {}, {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            product: mongoose.Types.ObjectId;
            user: mongoose.Types.ObjectId;
            sale: mongoose.Types.ObjectId;
            quantity: number;
            purchaseTime: NativeDate;
        }> & {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            product: mongoose.Types.ObjectId;
            user: mongoose.Types.ObjectId;
            sale: mongoose.Types.ObjectId;
            quantity: number;
            purchaseTime: NativeDate;
        } & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        };
        remainingInventory: number;
    }>;
}
