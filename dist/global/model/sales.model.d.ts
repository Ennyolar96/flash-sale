import mongoose from "mongoose";
export declare const Sales: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    product: mongoose.Types.ObjectId;
    startTime: NativeDate;
    totalInventory: number;
    remainingInventory: number;
    isActive: boolean;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    product: mongoose.Types.ObjectId;
    startTime: NativeDate;
    totalInventory: number;
    remainingInventory: number;
    isActive: boolean;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    product: mongoose.Types.ObjectId;
    startTime: NativeDate;
    totalInventory: number;
    remainingInventory: number;
    isActive: boolean;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    product: mongoose.Types.ObjectId;
    startTime: NativeDate;
    totalInventory: number;
    remainingInventory: number;
    isActive: boolean;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    product: mongoose.Types.ObjectId;
    startTime: NativeDate;
    totalInventory: number;
    remainingInventory: number;
    isActive: boolean;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    product: mongoose.Types.ObjectId;
    startTime: NativeDate;
    totalInventory: number;
    remainingInventory: number;
    isActive: boolean;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
