import { Request, Response } from "express";
export declare class ProductController {
    create(req: Request, res: Response): Promise<void>;
    findAllProduct(req: Request, res: Response): Promise<void>;
    getSingleProduct(req: Request, res: Response): Promise<void>;
}
