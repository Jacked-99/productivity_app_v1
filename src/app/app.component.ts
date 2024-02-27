import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskTableComponent } from './components/task.table/task.table.component';
import { TaksTableColumnComponent } from './components/taks-table-column/taks-table-column.component';
import {
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
  CdkDragDrop,
} from '@angular/cdk/drag-drop';
import { Task } from './shared/task';
import { TaskMain } from './shared/task-main';
import { TasksService } from './shared/tasks.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TaskTable } from './shared/task-table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TaksTableColumnComponent,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'productivityApp';
  tasks!: TaskTable[];
  constructor(private taskService: TasksService) {}
  ngOnInit(): void {
    this.taskService.loadTask();
    this.tasks = this.taskService.taskArray;
  }
  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.taskService.onDragTaskEvent(this.tasks);
  }
  addButtonClick() {
    this.taskService.onAddTaskArray();
  }
}
