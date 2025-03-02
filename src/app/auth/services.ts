import { User } from "@/global/model";
import { IUser } from "../user";
import jwt from "jsonwebtoken";
import * as argon from "argon2";

export class AuthServices {
  async register(body: IUser) {
    try {
      const findUser = await User.findOne({ email: body.email });
      if (findUser) throw new Error("email already registered");

      const hashPassword = await this.passwordEncodeAndDecode().decode(
        body.password
      );
      const user = await User.create({ ...body, password: hashPassword });
      const { password, ...response } = user.toObject();
      const token = await this.generateToken(response);
      return { ...response, token };
    } catch (error) {
      throw error;
    }
  }

  async login(body: { email: string; password: string }) {
    try {
      const user = await User.findOne({ email: body.email }).select(
        "+password"
      );

      if (!user) {
        throw new Error("Invalid credentials");
      }

      // Check if password matches
      const isMatch = await this.passwordEncodeAndDecode().encode(
        user.password,
        body.password
      );

      if (!isMatch) {
        throw new Error("Invalid credentials");
      }

      const { password, ...response } = user.toObject();
      const token = await this.generateToken(response);
      return { ...response, token };
    } catch (error) {
      throw error;
    }
  }

  private async generateToken(data: Omit<IUser, "password">): Promise<String> {
    return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: "1d" });
  }
  private passwordEncodeAndDecode() {
    const decode = async (password: string): Promise<string> => {
      return await argon.hash(password);
    };

    const encode = async (
      user_password: string,
      password: string
    ): Promise<boolean> => {
      return await argon.verify(user_password, password);
    };

    return { decode, encode };
  }
}
