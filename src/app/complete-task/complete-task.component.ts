import { Component, Input, OnInit } from '@angular/core';
import { LogComponent } from '../log/log.component';
import { Task } from '../task';
import { DataService } from '../data.service';
@Component({
  selector: 'app-complete-task',
  templateUrl: './complete-task.component.html',
  styleUrls: ['./complete-task.component.css']
})
export class CompleteTaskComponent implements OnInit {
  @Input()
  task:Task = 
  {
    id: 0,
    name:"",
    date: new Date(0,0,0),
    frequency:0
  };
  constructor(private data: DataService) { 
  }

  ngOnInit(): void {
  }
  
  done(){
    this.complete();
  }
  complete(){
    this.data.removeTask(this.task.id);
  }
}
