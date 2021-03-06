import { trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { LogComponent } from '../log/log.component';
import { taskLogItem } from '../log/logs';
import { LOGS } from '../log/temp';
import { LogsService } from '../logs.service';
@Component({
  selector: 'app-log-popup',
  templateUrl: './log-popup.component.html',
  styleUrls: ['./log-popup.component.css']
})
export class LogPopupComponent implements OnInit {
  display: boolean = false;
  constructor(private log: LogsService) { 
    
  }
  logs: taskLogItem[] = LOGS;
  ngOnInit(): void {
    this.log.toggle$.subscribe(
      change => this.display = change
    )
  }

  change(){
    this.display = !this.display;
  }
}
