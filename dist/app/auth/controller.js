"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const class_transformer_1 = require("class-transformer");
const auth_dto_1 = require("./auth.dto");
const class_validator_1 = require("class-validator");
const services_1 = require("./services");
const authService = new services_1.AuthServices();
class AuthController {
    async login(req, res) {
        try {
            const body = (0, class_transformer_1.plainToInstance)(auth_dto_1.Login, req.body);
            const errors = await (0, class_validator_1.validate)(body, {
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
            const createUser = await authService.login(body);
            res.status(200).json({ success: true, status: 200, data: createUser });
        }
        catch (error) {
            console.error(error);
            const message = error.message || "Internal server error";
            const code = error.statusCode ? error.statusCode : 500;
            res.status(code).json({ success: false, error: message });
            return;
        }
    }
    async register(req, res) {
        try {
            const body = (0, class_transformer_1.plainToInstance)(auth_dto_1.Register, req.body);
            const errors = await (0, class_validator_1.validate)(body, {
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
            const createUser = await authService.register(body);
            res.status(200).json({ success: true, status: 200, data: createUser });
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
exports.AuthController = AuthController;
//# sourceMappingURL=controller.js.map