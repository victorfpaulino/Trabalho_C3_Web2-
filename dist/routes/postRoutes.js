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
const express_1 = require("express");
const postController = __importStar(require("../controllers/postController"));
const middleware_1 = require("../middleware/middleware");
const postController_1 = require("../controllers/postController"); // Exemplo de controlador
const postController_2 = require("../controllers/postController");
const router = (0, express_1.Router)();
router.get('/', postController_2.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', middleware_1.authenticateToken, postController_1.createPost);
router.put('/:id', postController.updatePostById);
router.delete('/:id', postController.deletePostById);
exports.default = router;
