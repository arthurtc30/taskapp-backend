import prismaClient from "../../prisma";

interface TaskRequest {
  title: string;
  description: string;
  user_id: string;
}

class CreateTaskService {
  async execute({ title, description, user_id }: TaskRequest) {
    const task = await prismaClient.task.create({
      data: {
        title: title,
        description: description,
        user_id: user_id,
      },
      select: {
        id: true,
        title: true,
        description: true,
        created_at: true,
      },
    });

    return task;
  }
}

export { CreateTaskService };
