import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Task } from '../../shared/task';
import { TaskMain } from '../../shared/task-main';
import { MatDividerModule } from '@angular/material/divider';
import { TitleCasePipe } from '@angular/common';
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
  ],
  templateUrl: './task.table.component.html',
  styleUrl: './task.table.component.scss',
})
export class TaskTableComponent {
  @Input() taskData!: TaskMain;
}
