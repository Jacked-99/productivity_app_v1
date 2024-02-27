import { Injectable } from '@angular/core';
import { TaskMain } from './task-main';
import { TaskTable } from './task-table';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  taskArray!: TaskTable[];

  constructor() {}

  onTaskDelete(taksId: string, arrayID: number) {
    this.taskArray[arrayID].tasks = this.taskArray[arrayID].tasks.filter(
      (task) => task.uid != taksId
    );
    this.saveTasks();
  }
  onTaskAdd(task: TaskMain, arrayID: number) {
    this.taskArray[arrayID].tasks.push(task);
    this.saveTasks();
  }
  onAddTaskArray() {
    let newIndex = this.taskArray.length;
    let newTable: TaskTable = {
      id: newIndex,
      name: `Table ${newIndex + 1}`,
      tasks: [],
    };
    this.taskArray.push(newTable);
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
  onDragTaskEvent(modifiedTaskArray: TaskTable[]) {
    this.taskArray = modifiedTaskArray;
    this.saveTasks();
  }
  onTaskModify(taksId: string, arrayID: number, completed: boolean) {
    if (completed == true) {
      this.taskArray[arrayID].tasks.forEach((task) => {
        if (task.uid == taksId) {
          task.completed = true;
          task.subTasks?.forEach((t) => (t.completed = true));
        }
      });
    } else {
      this.taskArray[arrayID].tasks.forEach((task) => {
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
  onArrayRename(arrayID: number, newName: string) {
    this.taskArray[arrayID].name = newName;
    this.saveTasks();
  }
}
