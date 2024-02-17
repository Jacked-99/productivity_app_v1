import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskTableComponent } from './components/task.table/task.table.component';
import { TaksTableColumnComponent } from './components/taks-table-column/taks-table-column.component';
import {
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
  CdkDragDrop,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaksTableColumnComponent, DragDropModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'productivityApp';
}
