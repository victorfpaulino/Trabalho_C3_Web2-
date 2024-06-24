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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCommentById = exports.updateCommentById = exports.createComment = exports.getCommentById = exports.getAllComments = void 0;
const commentService = __importStar(require("../services/commentService"));
const getAllComments = async (req, res) => {
    const comments = await commentService.getAllComments();
    res.json(comments);
};
exports.getAllComments = getAllComments;
const getCommentById = async (req, res) => {
    const id = Number(req.params.id);
    const comment = await commentService.getCommentById(id);
    if (comment) {
        res.json(comment);
    }
    else {
        res.status(404).json({ error: 'Comentário não encontrado' });
    }
};
exports.getCommentById = getCommentById;
const createComment = async (req, res) => {
    const { content, postId, authorId } = req.body;
    const comment = await commentService.createComment(content, postId, authorId);
    res.status(201).json(comment);
};
exports.createComment = createComment;
const updateCommentById = async (req, res) => {
    const id = Number(req.params.id);
    const { content } = req.body;
    const updatedComment = await commentService.updateCommentById(id, content);
    if (updatedComment) {
        res.json(updatedComment);
    }
    else {
        res.status(404).json({ error: 'Comentário não encontrado' });
    }
};
exports.updateCommentById = updateCommentById;
const deleteCommentById = async (req, res) => {
    const id = Number(req.params.id);
    const deletedComment = await commentService.deleteCommentById(id);
    if (deletedComment) {
        res.json({ message: 'Comentário deletado com sucesso!' });
    }
    else {
        res.status(404).json({ error: 'Comentário não encontrado' });
    }
};
exports.deleteCommentById = deleteCommentById;
