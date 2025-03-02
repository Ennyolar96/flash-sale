import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from "class-validator";
import { IUser, Role } from "../user";

export class Register implements IUser {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsStrongPassword(
    {
      minLength: 8,
      minNumbers: 1,
      minUppercase: 1,
      minLowercase: 1,
      minSymbols: 1,
    },
    {
      message:
        "Password should be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one symbol",
    }
  )
  password: string;

  @IsOptional()
  @IsIn(Object.values(Role))
  role: Role = Role.user;
}

export class Login implements Pick<IUser, "email" | "password"> {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsStrongPassword(
    {
      minLength: 8,
      minNumbers: 1,
      minUppercase: 1,
      minLowercase: 1,
      minSymbols: 1,
    },
    {
      message:
        "Password should be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one symbol",
    }
  )
  password: string;
}
