import { Types } from "mongoose";
import { createSale } from "./sales.interface";
export declare class CreateSales implements createSale {
    product: Types.ObjectId;
    startTime: Date;
    totalInventory: number;
}
export declare class SingleSales {
    id: Types.ObjectId;
}
