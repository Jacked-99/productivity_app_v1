import { Injectable } from '@angular/core';
import { TaskMain } from './task-main';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  taskArray: TaskMain[][] = [
    [
      { uid: '1', date: new Date(Date.now()), completed: false, title: 'a' },
      { uid: '2', date: new Date(Date.now()), completed: false, title: 'b' },
      { uid: '3', date: new Date(Date.now()), completed: false, title: 'c' },
    ],
    [
      { uid: '5', date: new Date(Date.now()), completed: false, title: 'a' },
      { uid: '4', date: new Date(Date.now()), completed: false, title: 'b' },
      { uid: '6', date: new Date(Date.now()), completed: false, title: 'c' },
    ],
  ];

  constructor() {}

  onTaskDelete(taksId: string, arrayID: number) {}
  onTaskAdd(task: TaskMain, arrayID: number) {}
  onAddTaskArray() {}
  saveTasks() {}
  loadTask() {}
}
