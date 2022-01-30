import { Component, OnInit } from '@angular/core';
import { TASKS } from '../tasks';
import { Task } from '../task';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  temp:Task = {
    id: 0,
    date: new Date(0,0,0),
    name: "temp task",
    frequency: 0
  }
  addTask(){
    TASKS.push(this.temp);
  }
}
