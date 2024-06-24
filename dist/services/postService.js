"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePostById = exports.updatePostById = exports.createPost = exports.getPostById = exports.getAllPosts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllPosts = async () => {
    return await prisma.post.findMany({
        include: {
            comments: {},
        },
    });
};
exports.getAllPosts = getAllPosts;
const getPostById = async (id) => {
    return await prisma.post.findUnique({
        where: { id },
        include: {
            comments: {
                include: {
                    author: true,
                },
            },
        },
    });
};
exports.getPostById = getPostById;
const createPost = async (title, content, authorId) => {
    return await prisma.post.create({
        data: {
            title,
            content,
            authorId,
            published: true
        },
        include: {
            author: true,
        },
    });
};
exports.createPost = createPost;
const updatePostById = async (id, title, content) => {
    const existingPost = await prisma.post.findUnique({ where: { id } });
    if (!existingPost) {
        return null;
    }
    return await prisma.post.update({
        where: { id },
        data: { title, content },
        include: {
            author: true,
            comments: {
                include: {
                    author: true,
                },
            },
        },
    });
};
exports.updatePostById = updatePostById;
const deletePostById = async (id) => {
    const existingPost = await prisma.post.findUnique({ where: { id } });
    if (!existingPost) {
        return null;
    }
    return await prisma.post.delete({
        where: { id },
    });
};
exports.deletePostById = deletePostById;
