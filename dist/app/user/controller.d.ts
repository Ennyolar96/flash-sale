import { Request, Response } from "express";
import { AuthRequest } from "../../global/entity";
export declare class UserController {
    findUser(req: Request, res: Response): Promise<void>;
    loggedInUser(req: AuthRequest, res: Response): Promise<void>;
    FindAllUser(req: AuthRequest, res: Response): Promise<void>;
}
