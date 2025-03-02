"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
require("reflect-metadata");
const config_1 = require("./global/config");
const middleware_1 = require("./global/middleware");
const rate_1 = require("./global/middleware/rate");
const routes_1 = require("./routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.disable("x-powered-by");
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", rate_1.apiLimiter);
app.use(middleware_1.ErrorGuard);
if (process.env.NODE_ENV === "development") {
    app.use((0, morgan_1.default)("dev"));
}
(0, routes_1.ApplicationRouter)(app);
(0, config_1.connectDB)();
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
app.use((req, res, next) => {
    const error = new Error("unexpected route!, Oh you missed road");
    next(error);
});
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message,
            stack: process.env.NODE_ENV === "development" ? err.stack : null,
        },
    });
    next();
});
const server = app.listen(config_1.config.PORT, () => {
    console.log(`application server start: http://localhost:${config_1.config.PORT}`);
});
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
});
//# sourceMappingURL=main.js.map