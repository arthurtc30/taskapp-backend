import prismaClient from "../../prisma";

interface TaskRequest {
  id: string;
}

class FinishTaskService {
  async execute({ id }: TaskRequest) {
    const task = await prismaClient.task.update({
      where: {
        id: id,
      },
      data: {
        finished_date: new Date().toISOString(),
      },
    });

    return task;
  }
}

export { FinishTaskService };
