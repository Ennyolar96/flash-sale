import { Request, Response } from "express";
export declare class AuthController {
    login(req: Request, res: Response): Promise<void>;
    register(req: Request, res: Response): Promise<void>;
}
