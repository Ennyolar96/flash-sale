import { createSale } from "./sales.interface";
import { Types } from "mongoose";
export declare class SalesServices {
    create(body: createSale): Promise<import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        product: Types.ObjectId;
        startTime: NativeDate;
        totalInventory: number;
        remainingInventory: number;
        isActive: boolean;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        product: Types.ObjectId;
        startTime: NativeDate;
        totalInventory: number;
        remainingInventory: number;
        isActive: boolean;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }>;
    getActiveSale(): Promise<import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        product: Types.ObjectId;
        startTime: NativeDate;
        totalInventory: number;
        remainingInventory: number;
        isActive: boolean;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        product: Types.ObjectId;
        startTime: NativeDate;
        totalInventory: number;
        remainingInventory: number;
        isActive: boolean;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }>;
    activateSale(param: Types.ObjectId): Promise<import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        product: Types.ObjectId;
        startTime: NativeDate;
        totalInventory: number;
        remainingInventory: number;
        isActive: boolean;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        product: Types.ObjectId;
        startTime: NativeDate;
        totalInventory: number;
        remainingInventory: number;
        isActive: boolean;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }>;
    checkActive(id: Types.ObjectId): Promise<boolean>;
    getLeaderboard(param: Types.ObjectId): Promise<(import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        product: Types.ObjectId;
        user: Types.ObjectId;
        sale: Types.ObjectId;
        quantity: number;
        purchaseTime: NativeDate;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        product: Types.ObjectId;
        user: Types.ObjectId;
        sale: Types.ObjectId;
        quantity: number;
        purchaseTime: NativeDate;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    resetSaleInventory(param: Types.ObjectId): Promise<import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        product: Types.ObjectId;
        startTime: NativeDate;
        totalInventory: number;
        remainingInventory: number;
        isActive: boolean;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        product: Types.ObjectId;
        startTime: NativeDate;
        totalInventory: number;
        remainingInventory: number;
        isActive: boolean;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }>;
}
