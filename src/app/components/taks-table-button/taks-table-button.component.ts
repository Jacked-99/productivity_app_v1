import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { Task } from '../../shared/task';
import { take } from 'rxjs';
@Component({
  selector: 'app-taks-table-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './taks-table-button.component.html',
  styleUrl: './taks-table-button.component.scss',
})
export class TaksTableButtonComponent {
  newTask: Task = { date: new Date(Date.now()), completed: false, title: '' };
  @Output() AddTask = new EventEmitter();
  constructor(public dialog: MatDialog) {}
  addButtonClick() {
    {
      const dialogRef = this.dialog.open(TaskDialogComponent, {
        data: {},
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
        (this.newTask.date = result.date),
          (this.newTask.completed = false),
          (this.newTask.title = result.title);
        console.log(this.newTask);
      });
    }
  }
}
