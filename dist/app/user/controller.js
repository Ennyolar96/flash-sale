"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const services_1 = require("./services");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const user_dto_1 = require("./user.dto");
const userService = new services_1.UserServices();
class UserController {
    async findUser(req, res) {
        try {
            const param = (0, class_transformer_1.plainToInstance)(user_dto_1.singleUser, req.params);
            const errors = await (0, class_validator_1.validate)(param, {
                whitelist: true,
                forbidNonWhitelisted: true,
            });
            if (errors.length > 0) {
                const formattedErrors = errors.map((error) => ({
                    property: error.property,
                    message: error.constraints,
                }));
                res.status(422).json({
                    success: false,
                    status: 422,
                    error: formattedErrors,
                });
                return;
            }
            const user = await userService.findUser(param.id);
            res.status(200).json({
                success: true,
                status: 200,
                data: user,
            });
        }
        catch (error) {
            console.error(error);
            const message = error.message || "Internal server error";
            const code = error.statusCode ? error.statusCode : 500;
            res.status(code).json({ success: false, error: message });
            return;
        }
    }
    async loggedInUser(req, res) {
        try {
            const user = await userService.findLoginUser(req.user);
            res.status(200).json({
                success: true,
                status: 200,
                data: user,
            });
        }
        catch (error) {
            console.error(error);
            const message = error.message || "Internal server error";
            const code = error.statusCode ? error.statusCode : 500;
            res.status(code).json({ success: false, error: message });
            return;
        }
    }
    async FindAllUser(req, res) {
        try {
            const user = await userService.findAllUser();
            res.status(200).json({
                success: true,
                status: 200,
                data: user,
            });
        }
        catch (error) {
            console.error(error);
            const message = error.message || "Internal server error";
            const code = error.statusCode ? error.statusCode : 500;
            res.status(code).json({ success: false, error: message });
            return;
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=controller.js.map