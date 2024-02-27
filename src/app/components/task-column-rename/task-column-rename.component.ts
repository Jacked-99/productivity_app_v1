import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-column-rename',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './task-column-rename.component.html',
  styleUrl: './task-column-rename.component.scss',
})
export class TaskColumnRenameComponent {
  @Output() renameDecision = new EventEmitter<boolean>();
  onCancelRename() {
    this.renameDecision.emit(false);
  }
  onSubmitRename() {
    this.renameDecision.emit(true);
  }
}
