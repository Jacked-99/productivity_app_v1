import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { TaskTableComponent } from '../task.table/task.table.component';
import { TaksTableButtonComponent } from '../taks-table-button/taks-table-button.component';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { Task } from '../../shared/task';
import {
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
  CdkDragDrop,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-taks-table-column',
  standalone: true,
  imports: [
    MatCardModule,
    TaskTableComponent,
    TaksTableButtonComponent,
    TaskDialogComponent,
    DragDropModule,
  ],
  templateUrl: './taks-table-column.component.html',
  styleUrl: './taks-table-column.component.scss',
})
export class TaksTableColumnComponent {
  @Input() taskArray!: Task[];
  @Output() drop = new EventEmitter();

  tasks: Task[] = [
    { uid: '1', date: new Date(Date.now()), completed: false, title: 'a' },
    { uid: '2', date: new Date(Date.now()), completed: false, title: 'b' },
    { uid: '3', date: new Date(Date.now()), completed: false, title: 'c' },
  ];
  onAddTaskEmit(task: Task) {
    this.tasks = [...this.tasks, task];
  }
  onReciveDelete(data: string) {
    this.tasks = this.tasks.filter((currentTask) => {
      return currentTask.uid != data;
    });
  }
  onDropElement(event: CdkDragDrop<Task[]>) {
    console.log(event);
    this.drop.emit(event);
  }
}
