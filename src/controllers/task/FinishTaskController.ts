import { Request, Response } from "express";
import { FinishTaskService } from "../../services/task/FinishTaskService";

class FinishTaskController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;

    const finishTaskService = new FinishTaskService();

    const task = await finishTaskService.execute({
      id,
    });

    return res.json(task);
  }
}

export { FinishTaskController };
