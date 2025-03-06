import { AuthRequest } from "@/global/entity";
import { PurchaseServices } from "./services";
import { Response } from "express";
import { plainToInstance } from "class-transformer";
import { NewPurchase } from "./purchase.dto";
import { validate } from "class-validator";

const purchaseServices = new PurchaseServices();
export class PurchaseController {
  async create(req: AuthRequest, res: Response) {
    try {
      const body = plainToInstance(NewPurchase, req.body);
      const errors = await validate(body, {
        whitelist: true,
        forbidNonWhitelisted: true,
      });

      if (errors.length > 0) {
        const formattedErrors = errors.map((error) => ({
          property: error.property,
          message: error.constraints,
        }));
        res.status(422).json({
          success: false,
          status: 422,
          error: formattedErrors,
        });
        return;
      }
      const purchase = await purchaseServices.create(body, req.user);
      res.status(200).json({ success: true, status: 200, data: purchase });
    } catch (error: any) {
      console.error(error);
      const message = error.message || "Internal server error";
      const code = error.statusCode ? error.statusCode : 500;
      res.status(code).json({ success: false, error: message });
      return;
    }
  }
}
