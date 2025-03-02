import { Types } from "mongoose";
import { newPurchase } from "./purchase.interface";
export declare class NewPurchase implements newPurchase {
    saleId: Types.ObjectId;
    quantity: number;
}
