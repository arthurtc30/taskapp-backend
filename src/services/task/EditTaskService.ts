import prismaClient from "../../prisma";

interface TaskRequest {
  id: string;
  title: string;
  description: string;
  finished: boolean;
}

class EditTaskService {
  async execute({ id, title, description, finished }: TaskRequest) {
    const task = await prismaClient.task.update({
      data: {
        title: title,
        description: description,
        finished_date: finished ? new Date().toISOString() : null,
      },
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        description: true,
        created_at: true,
        updated_at: finished == null ? true : false,
        finished_date: finished == null ? false : true,
      },
    });

    return task;
  }
}

export { EditTaskService };
