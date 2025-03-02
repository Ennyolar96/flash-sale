"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const model_1 = require("../../global/model");
class UserServices {
    async findUser(param) {
        try {
            const user = await model_1.User.findById(param);
            if (!user) {
                throw new Error("User not found");
            }
            const { password, ...response } = user.toObject();
            return response;
        }
        catch (error) {
            throw error;
        }
    }
    async findLoginUser(loginUser) {
        try {
            const user = await model_1.User.findById(loginUser._id);
            if (!user) {
                throw new Error("User not found");
            }
            const { password, ...response } = user.toObject();
            return response;
        }
        catch (error) {
            throw error;
        }
    }
    async findAllUser() {
        try {
            const user = await model_1.User.find({}).select("-password");
            if (!user) {
                throw new Error("User not found");
            }
            return user;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.UserServices = UserServices;
//# sourceMappingURL=services.js.map