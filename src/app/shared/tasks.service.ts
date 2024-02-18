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
    this.saveTasks();
  }
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.taskArray));
  }
  loadTask() {
    this.taskArray = JSON.parse(localStorage.getItem('tasks')!);
  }
  onDragTaskEvent(modifiedTaskArray: TaskMain[][]) {
    this.taskArray = modifiedTaskArray;
    this.saveTasks();
  }
}
