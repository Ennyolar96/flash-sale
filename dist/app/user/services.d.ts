import { Types } from "mongoose";
import { IUser } from "./user.interface";
export declare class UserServices {
    findUser(param: Types.ObjectId): Promise<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
        name: string;
        email: string;
        role: import("./user.interface").Role;
        _id: Types.ObjectId;
        __v: number;
    }>;
    findLoginUser(loginUser: Omit<IUser, "password">): Promise<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
        name: string;
        email: string;
        role: import("./user.interface").Role;
        _id: Types.ObjectId;
        __v: number;
    }>;
    findAllUser(): Promise<(import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
        email: string;
        password: string;
        role: import("./user.interface").Role;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
        email: string;
        password: string;
        role: import("./user.interface").Role;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    })[]>;
}
