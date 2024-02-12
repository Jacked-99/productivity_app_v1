import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-task.table',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './task.table.component.html',
  styleUrl: './task.table.component.scss',
})
export class TaskTableComponent {}
