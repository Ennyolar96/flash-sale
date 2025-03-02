import mongoose from "mongoose";
export declare const Purchase: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    product: mongoose.Types.ObjectId;
    user: mongoose.Types.ObjectId;
    sale: mongoose.Types.ObjectId;
    quantity: number;
    purchaseTime: NativeDate;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
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
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    product: mongoose.Types.ObjectId;
    user: mongoose.Types.ObjectId;
    sale: mongoose.Types.ObjectId;
    quantity: number;
    purchaseTime: NativeDate;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    product: mongoose.Types.ObjectId;
    user: mongoose.Types.ObjectId;
    sale: mongoose.Types.ObjectId;
    quantity: number;
    purchaseTime: NativeDate;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    product: mongoose.Types.ObjectId;
    user: mongoose.Types.ObjectId;
    sale: mongoose.Types.ObjectId;
    quantity: number;
    purchaseTime: NativeDate;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
