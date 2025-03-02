import { Types } from "mongoose";
export interface ISales {
    _id: Types.ObjectId;
    product: Types.ObjectId;
    startTime: Date;
    totalInventory?: Number;
    remainingInventory?: Number;
    isActive: Boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface createSale extends Pick<ISales, "product" | "startTime" | "totalInventory"> {
}
