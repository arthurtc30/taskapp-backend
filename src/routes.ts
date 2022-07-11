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
import { ListTaskController } from "./controllers/task/ListTasksController";
import { ListFinishedTasksController } from "./controllers/task/ListFinishedTasksController";
import { ListUnfinishedTasksController } from "./controllers/task/ListUnfinishedTasksController";
import { FinishTaskController } from "./controllers/task/FinishTaskController";
import { OpenTaskController } from "./controllers/task/OpenTaskController";

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
router.get("/tasks", isAuthenticated, new ListTaskController().handle);
router.get(
  "/tasks/finished",
  isAuthenticated,
  new ListFinishedTasksController().handle
);
router.get(
  "/tasks/unfinished",
  isAuthenticated,
  new ListUnfinishedTasksController().handle
);
router.put("/task/finish", isAuthenticated, new FinishTaskController().handle);
router.put("/task/open", isAuthenticated, new OpenTaskController().handle);

export { router };
