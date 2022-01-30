import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LOGS } from './log/temp';
import { taskLogItem } from './log/logs';
import { Task } from './task';
@Injectable({
  providedIn: 'root'
})
export class LogsService {

  toggle: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  toggle$ = this.toggle.asObservable();

  add_task(task: Task){
    var logged_item: taskLogItem = {
      task_id: task.id,
      task_name: task.name,
      date_completed: new Date()
  };
  LOGS.push(logged_item);
}
}
