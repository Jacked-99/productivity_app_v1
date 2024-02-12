import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskTableComponent } from './components/task.table/task.table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'productivityApp';
}
