import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { TaskTableComponent } from '../task.table/task.table.component';

@Component({
  selector: 'app-taks-table-column',
  standalone: true,
  imports: [MatCardModule, TaskTableComponent],
  templateUrl: './taks-table-column.component.html',
  styleUrl: './taks-table-column.component.scss',
})
export class TaksTableColumnComponent {}
