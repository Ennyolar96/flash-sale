import { Application, Request, request, Response } from "express";
import { userRouter } from "./user";
import { authRouter } from "./auth";
import { salesRouter } from "./sales";
import { productRouter } from "./product";
import path from "path";

export const ApplicationRouter = (app: Application) => {
  app.get("/", (req: Request, res: Response) => {
    res.send("API is running");
  });

  app.get("/api-doc", (req: Request, res: Response) => {
    const filePath = path.join(__dirname, "", "flash-sale.json");
    console.log(filePath);
    res.download(filePath, "flash-sale.json");
  });

  [userRouter, authRouter, salesRouter, productRouter].forEach((ele) =>
    app.use("/api/", ele)
  );
};
