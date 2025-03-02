import dotenv from "dotenv";
dotenv.config();

export const config = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/flash-sale",
  JWT_SECRET: process.env.JWT_SECRET || "erxghvgyfecfgcgftdrxe",
  JWT_EXPIRE: process.env.JWT_EXPIRE || "1h",
  DEFAULT_PRODUCT_QUANTITY: 200,
  MAX_PURCHASE_PER_USER: 1,
};
