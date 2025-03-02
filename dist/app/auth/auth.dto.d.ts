import { IUser, Role } from "../user";
export declare class Register implements IUser {
    name: string;
    email: string;
    password: string;
    role: Role;
}
export declare class Login implements Pick<IUser, "email" | "password"> {
    email: string;
    password: string;
}
