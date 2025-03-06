import { Request, Response } from "express";
import { UserServices } from "./services";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { singleUser } from "./user.dto";
import { AuthRequest } from "@/global/entity";

const userService = new UserServices();
export class UserController {
  async findUser(req: Request, res: Response) {
    try {
      const param = plainToInstance(singleUser, req.params);
      const errors = await validate(param, {
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
      const user = await userService.findUser(param.id);
      res.status(200).json({
        success: true,
        status: 200,
        data: user,
      });
    } catch (error: any) {
      console.error(error);
      const message = error.message || "Internal server error";
      const code = error.statusCode ? error.statusCode : 500;
      res.status(code).json({ success: false, error: message });
      return;
    }
  }

  async loggedInUser(req: AuthRequest, res: Response) {
    try {
      const user = await userService.findLoginUser(req.user);
      res.status(200).json({
        success: true,
        status: 200,
        data: user,
      });
    } catch (error: any) {
      console.error(error);
      const message = error.message || "Internal server error";
      const code = error.statusCode ? error.statusCode : 500;
      res.status(code).json({ success: false, error: message });
      return;
    }
  }

  async FindAllUser(req: AuthRequest, res: Response) {
    try {
      const user = await userService.findAllUser();
      res.status(200).json({
        success: true,
        status: 200,
        data: user,
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
