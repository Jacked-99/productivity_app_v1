import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-taks-table-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './taks-table-button.component.html',
  styleUrl: './taks-table-button.component.scss',
})
export class TaksTableButtonComponent {}
