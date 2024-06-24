"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHash = generateHash;
exports.validateHash = validateHash;
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = 10;
async function generateHash(password) {
    try {
        const salt = await bcrypt_1.default.genSalt(saltRounds);
        const hash = await bcrypt_1.default.hash(password, salt);
        return hash;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}
async function validateHash(password, hash) {
    try {
        return await bcrypt_1.default.compare(password, hash);
    }
    catch (error) {
        console.log(error);
        return false;
    }
}
