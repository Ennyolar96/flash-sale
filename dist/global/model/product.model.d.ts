import mongoose from "mongoose";
export declare const Product: mongoose.Model<{
    createdAt: NativeDate;
    name: string;
    description: string;
    price: number;
    defaultQuantity: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
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
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    name: string;
    description: string;
    price: number;
    defaultQuantity: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    name: string;
    description: string;
    price: number;
    defaultQuantity: number;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    name: string;
    description: string;
    price: number;
    defaultQuantity: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
