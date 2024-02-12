import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-task-table',
  standalone: true,
  imports: [
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatCheckboxModule,
  ],
  templateUrl: './task.table.component.html',
  styleUrl: './task.table.component.scss',
})
export class TaskTableComponent {}
