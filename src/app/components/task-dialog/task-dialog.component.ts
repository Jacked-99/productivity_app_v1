import { Component, OnInit } from '@angular/core';
import {
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

import { MatListModule } from '@angular/material/list';
import { v4 as uuid } from 'uuid';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
export class TaskDialogComponent implements OnInit {
  taskTitle = '';
  subTaskCreate = false;
  isSmallScreen = false;
  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskMain,
    private breakpointObs: BreakpointObserver,
    private destroyRef: DestroyRef
  ) {}

  title = new FormControl('', Validators.required);
  date = new FormControl('', Validators.required);

  getDateError() {
    if (this.date.hasError('required')) {
      return 'Enter date';
    }
    return this.date.hasError('dirty') ? 'Invlaid date format' : '';
  }

  onNoclick() {
    this.dialogRef.close();
  }
  addSubtaskClick() {
    if (this.date.valid && this.title.valid) {
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
      this.taskTitle = '';
    }
  }
  ngOnInit(): void {
    this.breakpointObs
      .observe(Breakpoints.Handset)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        result.matches = this.isSmallScreen;
      });
  }
}
