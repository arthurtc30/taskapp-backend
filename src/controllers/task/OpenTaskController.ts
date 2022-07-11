import { Request, Response } from "express";
import { OpenTaskService } from "../../services/task/OpenTaskService";

class OpenTaskController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;

    const openTaskService = new OpenTaskService();

    const task = await openTaskService.execute({
      id,
    });

    const retorno = {
      ...task,
      message: `Tarefa "${task.title}" reaberta com sucesso!`,
    };

    return res.json(task);
  }
}

export { OpenTaskController };
