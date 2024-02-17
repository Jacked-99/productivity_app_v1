import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { TaskMain } from '../../shared/task-main';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-taks-table-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './taks-table-button.component.html',
  styleUrl: './taks-table-button.component.scss',
})
export class TaksTableButtonComponent {
  @Output() AddTask = new EventEmitter<TaskMain>();
  constructor(public dialog: MatDialog) {}
  dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  addButtonClick() {
    let newTask: TaskMain = {
      uid: uuidv4(),
      date: new Date(Date.now()),
      completed: false,
      title: 'a',
    };

    {
      const dialogRef = this.dialog.open(TaskDialogComponent, {
        data: {},
      });

      dialogRef.afterClosed().subscribe((result) => {
        (newTask.date = result.date.toLocaleDateString(
          undefined,
          this.dateOptions
        )),
          (newTask.title = result.title),
          (newTask.desc = result.desc);
        newTask.subTasks = result.subTasks;
        this.AddTask.emit(newTask);
      });
    }
  }
}
