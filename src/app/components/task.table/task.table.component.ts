import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Task } from '../../shared/task';
import { TaskMain } from '../../shared/task-main';
import { MatDividerModule } from '@angular/material/divider';
import { TitleCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-task-table',
  standalone: true,
  imports: [
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatDividerModule,
    TitleCasePipe,
    MatButtonModule,
  ],
  templateUrl: './task.table.component.html',
  styleUrl: './task.table.component.scss',
})
export class TaskTableComponent {
  @Input() taskData!: TaskMain;
  @Output() taskId = new EventEmitter<string>();

  onDeleteClick() {
    this.taskId.emit(this.taskData.uid);
  }
}
