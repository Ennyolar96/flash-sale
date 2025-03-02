"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    PORT: process.env.PORT || 5000,
    MONGO_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/flash-sale",
    JWT_SECRET: process.env.JWT_SECRET || "erxghvgyfecfgcgftdrxe",
    JWT_EXPIRE: process.env.JWT_EXPIRE || "1h",
    DEFAULT_PRODUCT_QUANTITY: 200,
    MAX_PURCHASE_PER_USER: 1,
};
//# sourceMappingURL=config.js.map