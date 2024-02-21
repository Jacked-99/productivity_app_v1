import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { TaskTableComponent } from '../task.table/task.table.component';
import { TaksTableButtonComponent } from '../taks-table-button/taks-table-button.component';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { Task } from '../../shared/task';
import { DragDropModule, CdkDragDrop } from '@angular/cdk/drag-drop';
import { TasksService } from '../../shared/tasks.service';
import { TaskTableMenuComponent } from '../task-table-menu/task-table-menu.component';

@Component({
  selector: 'app-taks-table-column',
  standalone: true,
  imports: [
    MatCardModule,
    TaskTableComponent,
    TaksTableButtonComponent,
    TaskDialogComponent,
    DragDropModule,
    TaskTableMenuComponent,
  ],
  templateUrl: './taks-table-column.component.html',
  styleUrl: './taks-table-column.component.scss',
})
export class TaksTableColumnComponent {
  @Input() taskArray!: Task[];
  @Input() taskArrayID!: number;
  @Output() drop = new EventEmitter();
  constructor(private taskService: TasksService) {}
  onAddTaskEmit(task: Task) {
    this.taskService.onTaskAdd(task, this.taskArrayID);
  }
  onReciveDelete(data: string) {
    this.taskService.onTaskDelete(data, this.taskArrayID);
  }
  onDropElement(event: CdkDragDrop<Task[]>) {
    this.drop.emit(event);
  }
  onReciveTableDelete() {
    this.taskService.onArrayDelete(this.taskArrayID);
  }
}
