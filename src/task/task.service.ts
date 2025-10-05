import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TaskService {
  private tasks = [
    {
      id: 1,
      title: 'Task 1',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Task 2',
      isCompleted: true,
    },
  ];
  findAll() {
    return this.tasks;
  }
  findById(id: string) {
    const task = this.tasks.find((task) => task.id === +id);
    if (!task) {
      // генерация встроенной ошибки
      throw new NotFoundException({
        message: 'Task not found!!!',
        code: 'TASK_NOT_FOUND',
        status: 404,
      });
    }
    return task;
  }
  create() {
    const newTask = {
      id: this.tasks.length + 1,
      title: 'New Task',
      isCompleted: false,
    };
    this.tasks.push(newTask);
    return this.tasks;
  }
}
