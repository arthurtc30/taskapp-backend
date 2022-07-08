import prismaClient from "../../prisma";

interface TaskRequest {
  id: string;
  title: string;
  description: string;
  finished: boolean;
}

class EditTaskService {
  async execute({ id, title, description, finished }: TaskRequest) {
    console.log(new Date())

    const task = await prismaClient.task.update({
      data: {
        title: title,
        description: description,
        finished_date: finished ? new Date().toISOString() : null,
      },
      where: {
        id: id,
      },
    });

    return task;
  }
}

export { EditTaskService };
