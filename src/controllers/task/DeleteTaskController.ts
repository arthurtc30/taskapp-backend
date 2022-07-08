import { Request, Response } from "express";
import { DeleteTaskService } from "../../services/task/DeleteTaskService";

class DeleteTaskController {
  async handle(req: Request, res: Response) {
    const task_id = req.query.id as string;

    const createTaskService = new DeleteTaskService();

    const task = await createTaskService.execute({
      task_id,
    });

    return res.json(task);
  }
}

export { DeleteTaskController };
