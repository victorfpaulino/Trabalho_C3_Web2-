"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDataBaseService_1 = __importDefault(require("../services/UserDataBaseService"));
const BcryptUtils_1 = require("../utils/BcryptUtils");
class UserController {
    constructor() { }
    async listUsers(req, res) {
        try {
            const users = await UserDataBaseService_1.default.listDBUsers();
            res.json({
                status: "ok",
                users: users,
            });
        }
        catch (error) {
            console.log(error);
            res.json({
                status: "error",
                message: error,
            });
        }
    }
    async createUser(req, res) {
        const body = req.body;
        console.log(body);
        if (!body.email || !body.name || !body.password) {
            res.json({
                status: "error",
                message: "Falta parâmetros",
            });
            return;
        }
        const hashPassword = await (0, BcryptUtils_1.generateHash)(body.password);
        if (!hashPassword) {
            res.json({
                status: "error",
                message: "Erro ao criptografar senha ...",
            });
        }
        try {
            const newuser = await UserDataBaseService_1.default.insertDBUser({
                name: body.name,
                email: body.email,
                password: hashPassword
            });
            res.json({
                status: "ok",
                newuser: newuser,
            });
        }
        catch (error) {
            res.json({
                status: "error",
                message: error,
            });
        }
    }
    async updateUser(req, res) {
        const id = req.params.id;
        if (!id) {
            res.json({
                status: "error",
                message: "Faltou o ID",
            });
        }
        const { name, email } = req.body;
        if (!email || !name) {
            res.json({
                status: "error",
                message: "Falta parâmetros",
            });
        }
        try {
            const updatedUser = await UserDataBaseService_1.default.updateDBUser({
                name: name,
                email: email,
            }, parseInt(id));
            res.json({
                status: "ok",
                newuser: updatedUser,
            });
        }
        catch (error) {
            res.json({
                status: "error",
                message: error,
            });
        }
    }
    async deleteUser(req, res) {
        const id = req.params.id;
        if (!id) {
            res.json({
                status: "error",
                message: "Faltou o ID",
            });
        }
        try {
            const response = await UserDataBaseService_1.default.deleteDBUser(parseInt(id));
            if (response) {
                res.json({
                    status: "ok",
                    message: "usuário deletado com sucesso",
                });
            }
        }
        catch (error) {
            console.log(error);
            res.json({
                status: "error",
                message: error,
            });
        }
    }
}
exports.default = new UserController();
