import { Types } from "mongoose";

export interface newPurchase {
  saleId: Types.ObjectId;
  quantity: number;
}
