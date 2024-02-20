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
  onTaskModify(taksId: string, arrayID: number) {
    //   let newArrr = this.taskArray.map((task) => {
    //     if (this.taskArray.indexOf(task) == arrayID) {
    //       return task.map((task) => {
    //         if (task.uid == taksId) {
    //           task.completed == true;
    //           task.subTasks?.forEach((subTsk) => (subTsk.completed = true));
    //         } else {
    //           task;
    //         }
    //       });
    //     } else {
    //       return task;
    //     }
    //   });
    //   console.log(newArrr);
    let targetArr = this.taskArray[arrayID];

    targetArr.forEach((task) => {
      if (task.uid == taksId) {
        task.completed = true;
        task.subTasks?.forEach((t) => (t.completed = true));
      }
    });
    this.taskArray.splice(arrayID, 1, targetArr);
    this.saveTasks();
  }
}
