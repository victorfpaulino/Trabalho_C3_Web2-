"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCommentById = exports.updateCommentById = exports.createComment = exports.getCommentById = exports.getAllComments = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllComments = async () => {
    return await prisma.comment.findMany({});
};
exports.getAllComments = getAllComments;
const getCommentById = async (id) => {
    return await prisma.comment.findUnique({
        where: { id },
        include: {
            author: true,
            post: true,
        },
    });
};
exports.getCommentById = getCommentById;
const createComment = async (content, postId, authorId) => {
    // Verificar se o post existe
    const post = await prisma.post.findUnique({
        where: {
            id: postId,
        },
    });
    if (!post) {
        throw new Error(`Post com ID ${postId} não encontrado`);
    }
    return await prisma.comment.create({
        data: { content, postId, authorId },
        include: {
            author: true,
            post: true,
        },
    });
};
exports.createComment = createComment;
const updateCommentById = async (id, content) => {
    const existingComment = await prisma.comment.findUnique({ where: { id } });
    if (!existingComment) {
        return null;
    }
    return await prisma.comment.update({
        where: { id },
        data: { content },
        include: {
            author: true,
            post: true,
        },
    });
};
exports.updateCommentById = updateCommentById;
const deleteCommentById = async (id) => {
    const existingComment = await prisma.comment.findUnique({ where: { id } });
    if (!existingComment) {
        return null;
    }
    return await prisma.comment.delete({
        where: { id },
    });
};
exports.deleteCommentById = deleteCommentById;
