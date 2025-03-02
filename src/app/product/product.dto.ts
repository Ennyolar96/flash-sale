import {
  IsCurrency,
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsString,
} from "class-validator";
import { createProduct } from "./product.interface";
import { Types } from "mongoose";
import { Transform } from "class-transformer";

export class CreateProduct implements createProduct {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsCurrency()
  price: number;

  @IsInt()
  @Transform(({ value }) => parseInt(value, 10))
  defaultQuantity?: number;
}

export class SingleProduct {
  @IsMongoId()
  id: Types.ObjectId;
}
