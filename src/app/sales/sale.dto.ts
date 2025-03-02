import { Types } from "mongoose";
import { createSale } from "./sales.interface";
import { IsDate, IsInt, IsMongoId } from "class-validator";
import { Transform } from "class-transformer";

export class CreateSales implements createSale {
  @IsMongoId()
  product: Types.ObjectId;

  @IsDate()
  @Transform(({ value }) => new Date(value))
  startTime: Date;

  @IsInt()
  @Transform(({ value }) => parseInt(value, 10))
  totalInventory: number;
}

export class SingleSales {
  @IsMongoId()
  id: Types.ObjectId;
}
