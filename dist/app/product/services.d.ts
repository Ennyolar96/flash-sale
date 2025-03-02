import { createProduct } from "./product.interface";
import { Types } from "mongoose";
export declare class ProductServices {
    create(body: createProduct): Promise<import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        name: string;
        description: string;
        price: number;
        defaultQuantity: number;
    }> & {
        createdAt: NativeDate;
        name: string;
        description: string;
        price: number;
        defaultQuantity: number;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }>;
    AllProducts(): Promise<(import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        name: string;
        description: string;
        price: number;
        defaultQuantity: number;
    }> & {
        createdAt: NativeDate;
        name: string;
        description: string;
        price: number;
        defaultQuantity: number;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    singleProduct(param: Types.ObjectId): Promise<import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        name: string;
        description: string;
        price: number;
        defaultQuantity: number;
    }> & {
        createdAt: NativeDate;
        name: string;
        description: string;
        price: number;
        defaultQuantity: number;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }>;
}
