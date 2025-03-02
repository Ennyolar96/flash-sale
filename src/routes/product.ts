import { ProductController } from "@/app/product/controller";
import { Role } from "@/app/user";
import { AuthGuard } from "@/global/middleware";
import { RoleGuard } from "@/global/middleware/role";
import { Router } from "express";
const productRouter = Router();
const controller = new ProductController();

productRouter.post(
  "/product/create",
  AuthGuard,
  RoleGuard([Role.admin]),
  controller.create
);
productRouter.get("/product/all", controller.findAllProduct);
productRouter.get("/product/:id", controller.getSingleProduct);

export { productRouter };
