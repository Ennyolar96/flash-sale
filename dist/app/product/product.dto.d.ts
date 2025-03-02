import { createProduct } from "./product.interface";
import { Types } from "mongoose";
export declare class CreateProduct implements createProduct {
    name: string;
    description: string;
    price: number;
    defaultQuantity?: number;
}
export declare class SingleProduct {
    id: Types.ObjectId;
}
