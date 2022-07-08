import { Request, Response } from "express";
import { ListFinishedTasksService } from "../../services/task/ListFinishedTasksService";

class ListFinishedTasksController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;

    const listFinishedTasksService = new ListFinishedTasksService();

    const tasks = await listFinishedTasksService.execute({
      user_id,
    });

    return res.json(tasks);
  }
}

export { ListFinishedTasksController };
