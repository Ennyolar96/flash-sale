import { IsMongoId } from "class-validator";
import { Types } from "mongoose";

export class singleUser {
  @IsMongoId()
  id: Types.ObjectId;
}
