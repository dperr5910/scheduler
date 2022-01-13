import { Component, OnInit } from '@angular/core';
import { taskLogItem } from './logs';
import { Task } from '../task';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { LogsService } from '../logs.service';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private logs:LogsService) { 

  }
  

  showText:boolean = false;
  
  ngOnInit(): void {
    this.logs.toggle$.subscribe(
      toggle => this.showText = toggle
    )
  }
  
  change(){
    this.showText = !this.showText;
  }



  logTask(task:Task){
    var dylan: taskLogItem = {
      task_id: task.id,
      task_name: task.name,
      date_completed: new Date()
    };
  }

}
