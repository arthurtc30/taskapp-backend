import { Router, Request, Response } from "express";
import multer from "multer";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import uploadConfig from "./config/multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { CreateTaskController } from "./controllers/task/CreateTaskController";
import { DeleteTaskController } from "./controllers/task/DeleteTaskController";
import { EditTaskController } from "./controllers/task/EditTaskController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// Rotas User
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

// Rotas Task
router.post("/task/add", isAuthenticated, new CreateTaskController().handle);
router.delete(
  "/task/delete",
  isAuthenticated,
  new DeleteTaskController().handle
);
router.put("/task/edit", isAuthenticated, new EditTaskController().handle);

export { router };
