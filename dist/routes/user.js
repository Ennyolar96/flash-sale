"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const user_1 = require("../app/user");
const controller_1 = require("../app/user/controller");
const middleware_1 = require("../global/middleware");
const role_1 = require("../global/middleware/role");
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
const controller = new controller_1.UserController();
userRouter.get("/user/get-one-user/:id", middleware_1.AuthGuard, (0, role_1.RoleGuard)([user_1.Role.admin]), controller.findUser);
userRouter.get("/user/get-logged-in-user", middleware_1.AuthGuard, (0, role_1.RoleGuard)([user_1.Role.user, user_1.Role.admin]), controller.loggedInUser);
userRouter.get("/user/get-all-user", middleware_1.AuthGuard, (0, role_1.RoleGuard)([user_1.Role.admin]), controller.FindAllUser);
//# sourceMappingURL=user.js.map