import { Injectable } from '@angular/core';
import { TaskMain } from './task-main';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  taskArray!: TaskMain[][];

  constructor() {}

  onTaskDelete(taksId: string, arrayID: number) {
    this.taskArray[arrayID] = this.taskArray[arrayID].filter(
      (task) => task.uid != taksId
    );
    this.saveTasks();
  }
  onTaskAdd(task: TaskMain, arrayID: number) {
    this.taskArray[arrayID].push(task);
    this.saveTasks();
  }
  onAddTaskArray() {
    this.taskArray.push([]);
    this.saveTasks();
  }
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.taskArray));
  }
  loadTask() {
    this.taskArray = JSON.parse(
      localStorage.getItem('tasks') || JSON.stringify([])
    );
  }
  onDragTaskEvent(modifiedTaskArray: TaskMain[][]) {
    this.taskArray = modifiedTaskArray;
    this.saveTasks();
  }
  onTaskModify(taksId: string, arrayID: number, completed: boolean) {
    if (completed == true) {
      this.taskArray[arrayID].forEach((task) => {
        if (task.uid == taksId) {
          task.completed = true;
          task.subTasks?.forEach((t) => (t.completed = true));
        }
      });
    } else {
      this.taskArray[arrayID].forEach((task) => {
        if (task.uid == taksId) {
          task.completed = false;
          task.subTasks?.forEach((t) => (t.completed = false));
        }
      });
    }

    this.saveTasks();
  }
  onArrayDelete(arrayID: number) {
    this.taskArray.splice(arrayID, 1);
    this.saveTasks();
  }
}
