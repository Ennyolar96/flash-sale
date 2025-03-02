import { Role } from "@/app/user";
import { UserController } from "@/app/user/controller";
import { AuthGuard } from "@/global/middleware";
import { RoleGuard } from "@/global/middleware/role";
import { Router } from "express";

const userRouter = Router();
const controller = new UserController();

userRouter.get(
  "/user/get-one-user/:id",
  AuthGuard,
  RoleGuard([Role.admin]),
  controller.findUser
);
userRouter.get(
  "/user/get-logged-in-user",
  AuthGuard,
  RoleGuard([Role.user, Role.admin]),
  controller.loggedInUser
);
userRouter.get(
  "/user/get-all-user",
  AuthGuard,
  RoleGuard([Role.admin]),
  controller.FindAllUser
);

export { userRouter };
