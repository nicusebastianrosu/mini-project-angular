import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable()
export class ProjectDataService {

  lastId: number = 0;
  tasks: Task[] = [];
  message: string | any;


  constructor() {
    this.message = "You must introduce something!"
  }

  addTask(task: Task): ProjectDataService {
    if (!task.id) {
      task.id = ++this.lastId;
      this.tasks.push(task);
      return this;
    } else {
      return this.message;
    }


  }

  updateTaskById(id: number, values: Object = {}): Task | any {
    let task = this.getTaskById(id);
    if (!task) {
      return this.message;
    }
    return task;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task | any {
    return this.tasks.filter(task => task.id === id).pop();
  }

  toggleTaskComplete(task: Task) {
    task.complete = !task.complete;
    return task;
  }

  // toggleTaskComplete(task: Task) {
  //   let updatedTask = this.updateTaskById(task.id, {
  //     complete: !task.complete
  //   });
  //   return updatedTask;
  // }

  deleteTaskById(id: number): ProjectDataService {
    this.tasks = this.tasks.filter(task => task.id != id);
    return this;
  }

}
