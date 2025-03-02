import { Request, Response } from "express";
import { SalesServices } from "./services";
import { plainToInstance } from "class-transformer";
import { CreateSales, SingleSales } from "./sale.dto";
import { validate } from "class-validator";

const salesService = new SalesServices();
export class SalesController {
  async create(req: Request, res: Response) {
    try {
      const body = plainToInstance(CreateSales, req.body);
      const errors = await validate(body);

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
      const createSales = await salesService.create(body);
      res.status(200).json({ success: true, status: 200, data: createSales });
    } catch (error: any) {
      console.error(error);
      const message = error.message || "Internal server error";
      const code = error.statusCode ? error.statusCode : 500;
      res.status(code).json({ success: false, error: message });
      return;
    }
  }

  async getActiveSale(req: Request, res: Response) {
    try {
      const product = await salesService.getActiveSale();
      res.status(200).json({
        success: true,
        status: 200,
        data: product,
      });
    } catch (error: any) {
      console.error(error);
      const message = error.message || "Internal server error";
      const code = error.statusCode ? error.statusCode : 500;
      res.status(code).json({ success: false, error: message });
      return;
    }
  }

  async activateSale(req: Request, res: Response) {
    try {
      const param = plainToInstance(SingleSales, req.params);
      const errors = await validate(param);

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
      const product = await salesService.activateSale(param.id);
      res.status(200).json({
        success: true,
        status: 200,
        data: product,
      });
    } catch (error: any) {
      console.error(error);
      const message = error.message || "Internal server error";
      const code = error.statusCode ? error.statusCode : 500;
      res.status(code).json({ success: false, error: message });
      return;
    }
  }

  async getLeaderboard(req: Request, res: Response) {
    try {
      const param = plainToInstance(SingleSales, req.params);
      const errors = await validate(param);

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
      const product = await salesService.getLeaderboard(param.id);
      res.status(200).json({
        success: true,
        status: 200,
        data: product,
      });
    } catch (error: any) {
      console.error(error);
      const message = error.message || "Internal server error";
      const code = error.statusCode ? error.statusCode : 500;
      res.status(code).json({ success: false, error: message });
      return;
    }
  }

  async resetSaleInventory(req: Request, res: Response) {
    try {
      const param = plainToInstance(SingleSales, req.params);
      const errors = await validate(param);

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
      const product = await salesService.resetSaleInventory(param.id);
      res.status(200).json({
        success: true,
        status: 200,
        data: product,
      });
    } catch (error: any) {
      console.error(error);
      const message = error.message || "Internal server error";
      const code = error.statusCode ? error.statusCode : 500;
      res.status(code).json({ success: false, error: message });
      return;
    }
  }
}
