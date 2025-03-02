import { NextFunction, Response } from "express";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { AuthRequest } from "../entity";
import { config } from "../config";
import { User } from "../model/user.model";

interface JwtPayload {
  _id: string;
  iat?: number;
  exp?: number;
}

export const AuthGuard = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader?.startsWith("Bearer ")) {
        res.status(401);
        throw new Error("Authentication required");
      }

      const token = authHeader.split(" ")[1];

      if (!token) {
        res.status(401);
        throw new Error("Authentication token required");
      }

      if (!config.JWT_SECRET) {
        throw new Error("JWT_SECRET is not configured");
      }

      const decoded = jwt.verify(token, config.JWT_SECRET) as JwtPayload;

      if (!decoded._id) {
        res.status(401);
        throw new Error("Invalid token format");
      }

      const user = await User.findById(decoded._id);

      if (!user) {
        res.status(401);
        throw new Error("User not found");
      }

      req.user = user;
      next();
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        res.status(401);
        throw new Error("Invalid or expired token");
      }

      if (error instanceof Error) {
        throw error;
      }
      res.status(500);
      throw new Error("Authentication failed");
    }
  }
);
