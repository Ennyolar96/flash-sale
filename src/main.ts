import cors from "cors";
import dotenv from "dotenv";
import express, { Application, NextFunction, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import "reflect-metadata";
import { config, connectDB } from "./global/config";
import { ErrorGuard } from "./global/middleware";
import { apiLimiter } from "./global/middleware/rate";
import { ApplicationRouter } from "./routes";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.disable("x-powered-by");
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiLimiter);
app.use(ErrorGuard);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
ApplicationRouter(app);

connectDB();

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error("unexpected route!, Oh you missed road");
  next(error);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : null,
    },
  });
  next();
});

const server = app.listen(config.PORT, () => {
  console.log(`application server start: http://localhost:${config.PORT}`);
});

process.on("unhandledRejection", (err: any, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
