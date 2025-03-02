import { Request } from "express";
import { IUser } from "@/app/user/user.interface";

export interface AuthRequest extends Request {
  user?: Omit<IUser, "password">;
}
