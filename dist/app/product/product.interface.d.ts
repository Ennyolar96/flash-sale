import { Types } from "mongoose";
export interface IProduct {
    _id?: Types.ObjectId;
    name: string;
    description: string;
    price: number;
    defaultQuantity?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface createProduct extends Omit<IProduct, "_id" | "createdAt" | "updatedAt"> {
}
