import { Component, Input, OnInit } from '@angular/core';
import { LogComponent } from '../log/log.component';
import { Task } from '../task';
@Component({
  selector: 'app-complete-task',
  templateUrl: './complete-task.component.html',
  styleUrls: ['./complete-task.component.css']
})
export class CompleteTaskComponent implements OnInit {
  @Input()
  task?:Task;
  constructor() { 
  }

  ngOnInit(): void {
  }
  
  done(){
    this.complete();
  }
  complete(){}
}
