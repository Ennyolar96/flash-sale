"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const model_1 = require("../../global/model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const argon = __importStar(require("argon2"));
class AuthServices {
    async register(body) {
        try {
            const findUser = await model_1.User.findOne({ email: body.email });
            if (findUser)
                throw new Error("email already registered");
            const hashPassword = await this.passwordEncodeAndDecode().decode(body.password);
            const user = await model_1.User.create({ ...body, password: hashPassword });
            const { password, ...response } = user.toObject();
            const token = await this.generateToken(response);
            return { ...response, token };
        }
        catch (error) {
            throw error;
        }
    }
    async login(body) {
        try {
            const user = await model_1.User.findOne({ email: body.email }).select("+password");
            if (!user) {
                throw new Error("Invalid credentials");
            }
            const isMatch = await this.passwordEncodeAndDecode().encode(user.password, body.password);
            if (!isMatch) {
                throw new Error("Invalid credentials");
            }
            const { password, ...response } = user.toObject();
            const token = await this.generateToken(response);
            return { ...response, token };
        }
        catch (error) {
            throw error;
        }
    }
    async generateToken(data) {
        return jsonwebtoken_1.default.sign(data, process.env.JWT_SECRET, { expiresIn: "1d" });
    }
    passwordEncodeAndDecode() {
        const decode = async (password) => {
            return await argon.hash(password);
        };
        const encode = async (user_password, password) => {
            return await argon.verify(user_password, password);
        };
        return { decode, encode };
    }
}
exports.AuthServices = AuthServices;
//# sourceMappingURL=services.js.map