import { Request, Response } from "express";
import { CreateTaskService } from "../../services/task/CreateTaskService";

class CreateTaskController {
  async handle(req: Request, res: Response) {
    const { title, description } = req.body;
    const user_id = req.user_id;

    // console.log(req);

    const createTaskService = new CreateTaskService();

    const task = await createTaskService.execute({
      title,
      description,
      user_id,
    });

    return res.json(task);
  }
}

export { CreateTaskController };
