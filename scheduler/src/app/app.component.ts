import { Component } from '@angular/core';
import { TASKS } from './tasks';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scheduler';

  tasks  = TASKS;
  
}
