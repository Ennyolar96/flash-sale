import { User } from "@/global/model";
import { Types } from "mongoose";
import { IUser } from "./user.interface";

export class UserServices {
  async findUser(param: Types.ObjectId) {
    try {
      const user = await User.findById(param);
      if (!user) {
        throw new Error("User not found");
      }
      const { password, ...response } = user.toObject();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async findLoginUser(loginUser: Omit<IUser, "password">) {
    try {
      const user = await User.findById(loginUser._id);
      if (!user) {
        throw new Error("User not found");
      }
      const { password, ...response } = user.toObject();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async findAllUser() {
    try {
      const user = await User.find({}).select("-password");
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      throw error;
    }
  }
}
