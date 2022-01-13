import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task';
@Component({
  selector: 'app-tasking',
  templateUrl: './tasking.component.html',
  styleUrls: ['./tasking.component.css']
})
export class TaskingComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  @Input()
  tasks: Task[] = [];
  
  dylan: Task = {
    id:2,
    name: "dylan",
    date: new Date(2021, 12,31),
    frequency: 2
  } 
  selected_task?: Task;
  onSelect(task:Task): void{
    this.selected_task = task;
  }
}
