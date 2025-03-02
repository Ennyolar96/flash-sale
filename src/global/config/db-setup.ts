import mongoose from "mongoose";
import { Purchase, Sales } from "../model";
import { config } from "./config";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.MONGO_URI, {
      writeConcern: { w: "majority" },
      retryWrites: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);

    await Promise.all([Purchase.createIndexes(), Sales.createIndexes()]);

    console.log("Database indexes created");
  } catch (err: any) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};
