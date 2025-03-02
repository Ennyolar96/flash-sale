"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationRouter = void 0;
const user_1 = require("./user");
const auth_1 = require("./auth");
const sales_1 = require("./sales");
const product_1 = require("./product");
const path_1 = __importDefault(require("path"));
const ApplicationRouter = (app) => {
    app.get("/", (req, res) => {
        res.send("API is running");
    });
    app.get("/api-doc", (req, res) => {
        const filePath = path_1.default.join(__dirname, "", "flash-sale.json");
        console.log(filePath);
        res.download(filePath, "flash-sale.json");
    });
    [user_1.userRouter, auth_1.authRouter, sales_1.salesRouter, product_1.productRouter].forEach((ele) => app.use("/api/", ele));
};
exports.ApplicationRouter = ApplicationRouter;
//# sourceMappingURL=index.js.map