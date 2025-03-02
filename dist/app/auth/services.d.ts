import { IUser } from "../user";
export declare class AuthServices {
    register(body: IUser): Promise<{
        token: String;
        createdAt: NativeDate;
        updatedAt: NativeDate;
        name: string;
        email: string;
        role: import("../user").Role;
        _id: import("mongoose").Types.ObjectId;
        __v: number;
    }>;
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        token: String;
        createdAt: NativeDate;
        updatedAt: NativeDate;
        name: string;
        email: string;
        role: import("../user").Role;
        _id: import("mongoose").Types.ObjectId;
        __v: number;
    }>;
    private generateToken;
    private passwordEncodeAndDecode;
}
