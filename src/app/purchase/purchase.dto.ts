import { Transform } from "class-transformer";
import { IsInt, IsMongoId } from "class-validator";
import { Types } from "mongoose";
import { newPurchase } from "./purchase.interface";

export class NewPurchase implements newPurchase {
  @IsMongoId()
  saleId: Types.ObjectId;

  @IsInt()
  @Transform(({ value }) => parseInt(value, 10))
  quantity: number;
}
