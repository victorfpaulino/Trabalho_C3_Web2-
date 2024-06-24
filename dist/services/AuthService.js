"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = __importDefault(require("../../prisma/client"));
const registerUser = async (name, email, password) => {
    const hashedPassword = await bcryptjs_1.default.hash(password, 10);
    return client_1.default.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });
};
exports.registerUser = registerUser;
const loginUser = async (email, password) => {
    const user = await client_1.default.user.findUnique({ where: { email } });
    if (!user || !(await bcryptjs_1.default.compare(password, user.password))) {
        throw new Error('Invalid email or password');
    }
    const accessToken = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
    return accessToken;
};
exports.loginUser = loginUser;
