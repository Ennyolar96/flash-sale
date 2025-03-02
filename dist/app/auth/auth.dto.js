"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.Register = void 0;
const class_validator_1 = require("class-validator");
const user_1 = require("../user");
class Register {
    constructor() {
        this.role = user_1.Role.user;
    }
}
exports.Register = Register;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Register.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], Register.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsStrongPassword)({
        minLength: 8,
        minNumbers: 1,
        minUppercase: 1,
        minLowercase: 1,
        minSymbols: 1,
    }, {
        message: "Password should be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one symbol",
    }),
    __metadata("design:type", String)
], Register.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(Object.values(user_1.Role)),
    __metadata("design:type", String)
], Register.prototype, "role", void 0);
class Login {
}
exports.Login = Login;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], Login.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsStrongPassword)({
        minLength: 8,
        minNumbers: 1,
        minUppercase: 1,
        minLowercase: 1,
        minSymbols: 1,
    }, {
        message: "Password should be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one symbol",
    }),
    __metadata("design:type", String)
], Login.prototype, "password", void 0);
//# sourceMappingURL=auth.dto.js.map