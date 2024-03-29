import prismaClient from "../../prisma";

interface TaskRequest {
  id: string;
}

class OpenTaskService {
  async execute({ id }: TaskRequest) {
    const task = await prismaClient.task.update({
      where: {
        id: id,
      },
      data: {
        finished_date: null,
      },
      select: {
        id: true,
        title: true,
        description: true,
        created_at: true,
        updated_at: true,
        finished_date: true,
      },
    });

    return task;
  }
}

export { OpenTaskService };
