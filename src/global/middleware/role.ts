import { NextFunction, Response } from "express";
import asyncHandler from "express-async-handler";
import { AuthRequest } from "../entity";

export const RoleGuard = (allowedRoles: string[]) => {
  return asyncHandler(
    async (req: AuthRequest, res: Response, next: NextFunction) => {
      if (!req.user) {
        res.status(401);
        throw new Error("Authentication required");
      }
      if (!allowedRoles.includes(req.user.role)) {
        res.status(403);
        throw new Error("Insufficient permissions");
      }

      next();
    }
  );
};
