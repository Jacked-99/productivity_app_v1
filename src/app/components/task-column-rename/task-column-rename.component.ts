import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RenameEventData } from '../../shared/rename-event-data';

@Component({
  selector: 'app-task-column-rename',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule],
  templateUrl: './task-column-rename.component.html',
  styleUrl: './task-column-rename.component.scss',
})
export class TaskColumnRenameComponent {
  @Output() renameDecision = new EventEmitter<RenameEventData>();
  newName = '';
  onCancelRename() {
    this.renameDecision.emit({ decision: false, newName: '' });
  }
  onSubmitRename() {
    this.renameDecision.emit({ decision: true, newName: this.newName });
  }
}
