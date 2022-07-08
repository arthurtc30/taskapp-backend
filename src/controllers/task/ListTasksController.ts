import { Request, Response } from "express";
import { ListTaskService } from "../../services/task/ListTasksService";

class ListTaskController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;

    const listTaskService = new ListTaskService();

    const tasks = await listTaskService.execute({
      user_id,
    });

    return res.json(tasks);
  }
}

export { ListTaskController };
