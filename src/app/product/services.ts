import { Product } from "@/global/model";
import { createProduct } from "./product.interface";
import { Types } from "mongoose";

export class ProductServices {
  async create(body: createProduct) {
    try {
      const product = await Product.create(body);
      return product;
    } catch (error) {
      throw error;
    }
  }

  async AllProducts() {
    try {
      const products = await Product.find({});
      return products;
    } catch (error) {
      throw error;
    }
  }

  async singleProduct(param: Types.ObjectId) {
    try {
      const product = await Product.findById(param);
      if (!product) {
        throw new Error("Product not found");
      }
      return product;
    } catch (error) {
      throw error;
    }
  }
}
