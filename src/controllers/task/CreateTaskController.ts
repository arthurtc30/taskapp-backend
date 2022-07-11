import { Request, Response } from "express";
import { CreateTaskService } from "../../services/task/CreateTaskService";

class CreateTaskController {
  async handle(req: Request, res: Response) {
    const { title, description } = req.body;
    const user_id = req.user_id;

    const createTaskService = new CreateTaskService();

    const task = await createTaskService.execute({
      title,
      description,
      user_id,
    });

    const retorno = {
      ...task,
      message: `Tarefa ${task.title} criada com sucesso!`,
    };

    return res.json(retorno);
  }
}

export { CreateTaskController };
