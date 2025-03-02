"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const controller_1 = require("../app/auth/controller");
const express_1 = require("express");
const authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
const controller = new controller_1.AuthController();
authRouter.post("/auth/login", controller.login);
authRouter.post("/auth/register", controller.register);
//# sourceMappingURL=auth.js.map