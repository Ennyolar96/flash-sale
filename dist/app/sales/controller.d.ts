import { Request, Response } from "express";
export declare class SalesController {
    create(req: Request, res: Response): Promise<void>;
    getActiveSale(req: Request, res: Response): Promise<void>;
    activateSale(req: Request, res: Response): Promise<void>;
    getLeaderboard(req: Request, res: Response): Promise<void>;
    resetSaleInventory(req: Request, res: Response): Promise<void>;
}
