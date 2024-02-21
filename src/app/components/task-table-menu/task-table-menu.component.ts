import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-table-menu',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule],
  templateUrl: './task-table-menu.component.html',
  styleUrl: './task-table-menu.component.scss',
})
export class TaskTableMenuComponent {}
