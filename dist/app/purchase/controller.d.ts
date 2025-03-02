import { AuthRequest } from "../../global/entity";
import { Response } from "express";
export declare class PurchaseController {
    create(req: AuthRequest, res: Response): Promise<void>;
}
