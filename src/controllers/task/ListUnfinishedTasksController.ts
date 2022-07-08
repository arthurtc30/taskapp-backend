import { Request, Response } from "express";
import { ListUnfinishedTasksService } from "../../services/task/ListUnfinishedTasksService";

class ListUnfinishedTasksController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;

    const listUnfinishedTasksService = new ListUnfinishedTasksService();

    const tasks = await listUnfinishedTasksService.execute({
      user_id,
    });

    return res.json(tasks);
  }
}

export { ListUnfinishedTasksController };
