"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const user_interface_1 = require("../../app/user/user.interface");
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
        trim: true,
        maxlength: [50, "Name cannot be more than 50 characters"],
    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please add a valid email",
        ],
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minlength: 6,
        select: false,
    },
    role: {
        type: String,
        required: [true, "Select role  between user and admin"],
        enum: Object.values(user_interface_1.Role),
    },
}, {
    timestamps: true,
});
exports.User = mongoose_1.default.model("User", UserSchema);
//# sourceMappingURL=user.model.js.map