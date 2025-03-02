"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const controller_1 = require("../app/product/controller");
const user_1 = require("../app/user");
const middleware_1 = require("../global/middleware");
const role_1 = require("../global/middleware/role");
const express_1 = require("express");
const productRouter = (0, express_1.Router)();
exports.productRouter = productRouter;
const controller = new controller_1.ProductController();
productRouter.post("/product/create", middleware_1.AuthGuard, (0, role_1.RoleGuard)([user_1.Role.admin]), controller.create);
productRouter.get("/product/all", controller.findAllProduct);
productRouter.get("/product/:id", controller.getSingleProduct);
//# sourceMappingURL=product.js.map