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
import { Task } from './shared/task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaksTableColumnComponent, DragDropModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'productivityApp';
  tasks: Task[][] = [
    [
      { uid: '1', date: new Date(Date.now()), completed: false, title: 'a' },
      { uid: '2', date: new Date(Date.now()), completed: false, title: 'b' },
      { uid: '3', date: new Date(Date.now()), completed: false, title: 'c' },
    ],
    [
      { uid: '5', date: new Date(Date.now()), completed: false, title: 'a' },
      { uid: '4', date: new Date(Date.now()), completed: false, title: 'b' },
      { uid: '6', date: new Date(Date.now()), completed: false, title: 'c' },
    ],
  ];

  drop(event: CdkDragDrop<Task[]>) {
    console.log(event);
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
  }
}
