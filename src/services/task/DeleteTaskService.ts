import prismaClient from "../../prisma";

interface TaskRequest {
  task_id: string;
}

class DeleteTaskService {
  async execute({ task_id }: TaskRequest) {
    const task = await prismaClient.task.delete({
      where: {
        id: task_id,
      },
      select: {
        id: true,
        title: true,
        description: true,
      },
    });

    return task;
  }
}

export { DeleteTaskService };
