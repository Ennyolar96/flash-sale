"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const model_1 = require("../model");
const config_1 = require("./config");
const connectDB = async () => {
    try {
        const conn = await mongoose_1.default.connect(config_1.config.MONGO_URI, {
            writeConcern: { w: "majority" },
            retryWrites: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        await Promise.all([model_1.Purchase.createIndexes(), model_1.Sales.createIndexes()]);
        console.log("Database indexes created");
    }
    catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
//# sourceMappingURL=db-setup.js.map