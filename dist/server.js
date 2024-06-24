"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthRoutes_1 = __importDefault(require("./routes/AuthRoutes"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes")); // Exemplo de outras rotas
const commentRoutes_1 = __importDefault(require("./routes/commentRoutes")); // Exemplo de outras rotas
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/auth", AuthRoutes_1.default); // Montando o roteador com o prefixo "/api/auth"
app.use("/api/users", UserRoutes_1.default); // Exemplo para o UserRouter, ajuste conforme sua necessidade
app.use('/api/posts', postRoutes_1.default); // Exemplo de outras rotas
app.use('/api/comments', commentRoutes_1.default); // Exemplo de outras rotas
app.listen(port, () => {
    console.log("Servidor rodando na porta " + port);
});
