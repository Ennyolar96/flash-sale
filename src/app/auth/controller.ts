import { plainToInstance } from "class-transformer";
import { Request, Response } from "express";
import { Login, Register } from "./auth.dto";
import { validate } from "class-validator";
import { AuthServices } from "./services";

const authService = new AuthServices();
export class AuthController {
  async login(req: Request, res: Response) {
    try {
      const body = plainToInstance(Login, req.body);
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
      const createUser = await authService.login(body);
      res.status(200).json({ success: true, status: 200, data: createUser });
    } catch (error: any) {
      console.error(error);
      const message = error.message || "Internal server error";
      const code = error.statusCode ? error.statusCode : 500;
      res.status(code).json({ success: false, error: message });
      return;
    }
  }
  async register(req: Request, res: Response) {
    try {
      const body = plainToInstance(Register, req.body);
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
      const createUser = await authService.register(body);
      res.status(200).json({ success: true, status: 200, data: createUser });
    } catch (error: any) {
      console.error(error);
      const message = error.message || "Internal server error";
      const code = error.statusCode ? error.statusCode : 500;
      res.status(code).json({ success: false, error: message });
      return;
    }
  }
}
