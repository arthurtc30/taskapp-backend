import { Request, Response } from "express";
import { EditTaskService } from "../../services/task/EditTaskService";

class EditTaskController {
  async handle(req: Request, res: Response) {
    const { id, title, description, finished } = req.body;

    const editTaskService = new EditTaskService();

    const task = await editTaskService.execute({
      id,
      title,
      description,
      finished,
    });

    return res.json(task);
  }
}

export { EditTaskController };
