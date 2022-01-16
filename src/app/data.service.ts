import { Injectable } from '@angular/core';
import { TASKS } from './tasks';
import { LOGS } from './log/temp';
import { Task } from './task';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { 
  }

  getTasks(): Task[]{
    return TASKS;
  }

  removeTask(num:number): void{ 
    TASKS.forEach((value, index) => 
      {if(value.id == num ){
        TASKS.splice(index,1);
      }
      });

  }

  

}
