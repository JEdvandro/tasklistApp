import { Task } from './task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
   tasks: Task[] = [
     {id: 1, description: 'Tarefa 1', completed: true },
     {id: 2, description: 'Tarefa 2', completed: false },
     {id: 3, description: 'Tarefa 3', completed: false },
     {id: 4, description: 'Tarefa 4', completed: false },
     {id: 5, description: 'Tarefa 5', completed: false },
     {id: 6, description: 'Tarefa 6', completed: true },
     {id: 7, description: 'Tarefa 7', completed: false },
     {id: 8, description: 'Tarefa 8', completed: false },
     {id: 9, description: 'Tarefa 9', completed: true },
     {id: 10, description: 'Tarefa 10', completed: false },
   ];

  constructor() { }

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const tasks = this.tasks.find((value) => value.id == id);
    return tasks;
  }

  save(task: Task) {
    if (task.id) {// alteração
      const TaskArr = this.getById(task.id);
      TaskArr.description = task.description;
      TaskArr.completed = task.completed;
    } else {// inclusão
      const lastId  = this.tasks[this.tasks.length - 1].id;
      task.id = lastId + 1;
      task.completed = false;
      this.tasks.push(task);
    }


  }

  delete(id: number) {
    const taskIndex = this.tasks.findIndex((value) => value.id == id);
    this.tasks.splice(taskIndex, 1);
  }
}
