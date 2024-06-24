import { Router } from "express";
import UserController from "../controllers/UserController";

const UserRouter = Router();

UserRouter.get("/", UserController.listUsers); 
UserRouter.post("/", UserController.createUser); 
UserRouter.patch("/:id", UserController.updateUser); 
UserRouter.delete("/:id", UserController.deleteUser); 

export default UserRouter;
