import { Injectable } from '@angular/core';
import { TASKS } from './tasks';
import { LOGS } from './log/temp';
import { Task } from './task';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { TypeModifier } from '@angular/compiler/src/output/output_ast';
import { LogsService } from './logs.service';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private log: LogsService) { 
  }

  tasks: Task[] = TASKS;
  getTasks(): Observable<Task[]>{
    const tmp = of(this.tasks);
    return tmp;
  }

  removed_task: Task = this.tasks[0];
  removeTask(num:number): void{ 
    TASKS.forEach((value, index) => 
      {if(value.id == num ){
        this.removed_task = TASKS.splice(index,1)[0];
      }
      });
    this.log.add_task(this.removed_task)
  }

  

}
