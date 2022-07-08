import prismaClient from "../../prisma";

interface TaskRequest {
  user_id: string;
}

class ListTaskService {
  async execute({ user_id }: TaskRequest) {
    const tasks = await prismaClient.task.findMany({
      where: {
        user_id: user_id,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return tasks;
  }
}

export { ListTaskService };
