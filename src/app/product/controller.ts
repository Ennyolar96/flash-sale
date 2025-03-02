import { Request, Response } from "express";
import { ProductServices } from "./services";
import { plainToInstance } from "class-transformer";
import { CreateProduct, SingleProduct } from "./product.dto";
import { validate } from "class-validator";

const productService = new ProductServices();
export class ProductController {
  async create(req: Request, res: Response) {
    try {
      const body = plainToInstance(CreateProduct, req.body);
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
      const product = await productService.create(body);
      res.status(200).json({ success: true, status: 200, data: product });
    } catch (error: any) {
      console.error(error);
      const message = error.message || "Internal server error";
      const code = error.statusCode ? error.statusCode : 500;
      res.status(code).json({ success: false, error: message });
      return;
    }
  }

  async findAllProduct(req: Request, res: Response) {
    try {
      const product = await productService.AllProducts();
      res.status(200).json({ success: true, status: 200, data: product });
    } catch (error: any) {
      console.error(error);
      const message = error.message || "Internal server error";
      const code = error.statusCode ? error.statusCode : 500;
      res.status(code).json({ success: false, error: message });
      return;
    }
  }

  async getSingleProduct(req: Request, res: Response) {
    try {
      const param = plainToInstance(SingleProduct, req.params);
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
      const product = await productService.singleProduct(param.id);
      res.status(200).json({ success: true, status: 200, data: product });
    } catch (error: any) {
      console.error(error);
      const message = error.message || "Internal server error";
      const code = error.statusCode ? error.statusCode : 500;
      res.status(code).json({ success: false, error: message });
      return;
    }
  }
}
