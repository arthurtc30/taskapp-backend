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

    const retorno = {
      ...task,
      message: `Tarefa "${task.title}" editada com sucesso!`,
    };

    return res.json(retorno);
  }
}

export { EditTaskController };
