import { AuthController } from "@/app/auth/controller";
import { Router } from "express";
const authRouter = Router();
const controller = new AuthController();

authRouter.post("/auth/login", controller.login);
authRouter.post("/auth/register", controller.register);
export { authRouter };
