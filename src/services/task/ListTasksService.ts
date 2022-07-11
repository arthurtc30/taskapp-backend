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
      select: {
        id: true,
        title: true,
        description: true,
        created_at: true,
        updated_at: true,
      },
    });

    return tasks;
  }
}

export { ListTaskService };
