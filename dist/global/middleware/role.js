"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleGuard = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const RoleGuard = (allowedRoles) => {
    return (0, express_async_handler_1.default)(async (req, res, next) => {
        if (!req.user) {
            res.status(401);
            throw new Error("Authentication required");
        }
        if (!allowedRoles.includes(req.user.role)) {
            res.status(403);
            throw new Error("Insufficient permissions");
        }
        next();
    });
};
exports.RoleGuard = RoleGuard;
//# sourceMappingURL=role.js.map