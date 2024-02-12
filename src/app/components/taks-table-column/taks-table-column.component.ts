import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { TaskTableComponent } from '../task.table/task.table.component';
import { TaksTableButtonComponent } from '../taks-table-button/taks-table-button.component';

@Component({
  selector: 'app-taks-table-column',
  standalone: true,
  imports: [MatCardModule, TaskTableComponent, TaksTableButtonComponent],
  templateUrl: './taks-table-column.component.html',
  styleUrl: './taks-table-column.component.scss',
})
export class TaksTableColumnComponent {}
