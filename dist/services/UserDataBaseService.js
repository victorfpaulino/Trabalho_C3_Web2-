"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class UserDataBaseService {
    constructor() { }
    async listDBUsers() {
        try {
            return await prisma.user.findMany({
                select: {
                    name: true,
                    id: false,
                    email: true,
                    password: false
                }
            });
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async insertDBUser(user) {
        try {
            const newuser = await prisma.user.create({
                data: user,
            });
            return newuser;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async updateDBUser(user, id) {
        try {
            const updatedUser = await prisma.user.update({
                data: user,
                where: {
                    id: id,
                },
            });
            return updatedUser;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async deleteDBUser(id) {
        try {
            await prisma.user.delete({
                where: {
                    id: id,
                },
            });
            return true;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
}
exports.default = new UserDataBaseService();
