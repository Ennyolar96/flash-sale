import { PurchaseController } from "@/app/purchase/controller";
import { SalesController } from "@/app/sales/controller";
import { Role } from "@/app/user";
import { AuthGuard } from "@/global/middleware";
import { RoleGuard } from "@/global/middleware/role";
import { Router } from "express";
const salesRouter = Router();

const controllerSales = new SalesController();
const controllerPurchase = new PurchaseController();

salesRouter.post(
  "/sales/create",
  AuthGuard,
  RoleGuard([Role.admin]),
  controllerSales.create
);
salesRouter.get("/sales/active", AuthGuard, controllerSales.getActiveSale);
salesRouter.patch(
  "/sales/activate/:id",
  AuthGuard,
  RoleGuard([Role.admin]),
  controllerSales.activateSale
);
salesRouter.get("/sales/leaderboard/:id", controllerSales.getLeaderboard);
salesRouter.patch(
  "/sales/resetInventory/:id",
  AuthGuard,
  RoleGuard([Role.admin]),
  controllerSales.resetSaleInventory
);

salesRouter.post(
  "/purchase/create",
  AuthGuard,
  RoleGuard([Role.user, Role.admin]),
  controllerPurchase.create
);

export { salesRouter };
