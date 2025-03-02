import { Types } from "mongoose";
export declare enum Role {
    user = "user",
    admin = "admin"
}
export interface IUser {
    _id?: Types.ObjectId;
    name: string;
    email: string;
    password: string;
    role: Role;
    createdAt?: Date;
    updatedAt?: Date;
}
