import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task';
import { DataService } from '../data.service';
@Component({
  selector: 'app-tasking',
  templateUrl: './tasking.component.html',
  styleUrls: ['./tasking.component.css']
})
export class TaskingComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private data: DataService) { 

  }
  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.data.getTasks()
        .subscribe(heroes => this.tasks = heroes);
  }

  selected_task?: Task;
  onSelect(task:Task): void{
    this.selected_task = task;
  }
}
