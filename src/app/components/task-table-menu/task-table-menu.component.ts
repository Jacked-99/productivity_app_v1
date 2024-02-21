import { Component, EventEmitter, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-task-table-menu',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './task-table-menu.component.html',
  styleUrl: './task-table-menu.component.scss',
})
export class TaskTableMenuComponent {
  @Output() deleteMenu = new EventEmitter();

  onDeleteMenu() {
    this.deleteMenu.emit();
  }
}
