import { Component } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Inject } from '@angular/core';
import { TaskMain } from '../../shared/task-main';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { Task } from '../../shared/task';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-task-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDatepickerModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './task-dialog.component.html',
  styleUrl: './task-dialog.component.scss',
})
export class TaskDialogComponent {
  taskTitle = '';
  subTaskCreate = false;
  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskMain
  ) {}

  title = new FormControl('', Validators.required);
  date = new FormControl('', Validators.required);

  onNoclick() {
    this.dialogRef.close();
  }
  addSubtaskClick() {
    let subTaskData: Task = {
      uid: '',
      title: '',
      completed: false,
      date: this.data.date,
    };
    if (!this.subTaskCreate) {
      this.subTaskCreate = true;
    }
    if (!this.data.subTasks) {
      this.data.subTasks = [];
    }
    subTaskData.title = this.taskTitle;
    subTaskData.uid = uuid();

    this.data.subTasks?.push(subTaskData);
    console.log(this.data.subTasks);
    this.taskTitle = '';
  }
}
