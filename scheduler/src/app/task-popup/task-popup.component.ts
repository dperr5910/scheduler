import { TmplAstElement } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task';
@Component({
  selector: 'app-task-popup',
  templateUrl: './task-popup.component.html',
  styleUrls: ['./task-popup.component.css']
})
export class TaskPopupComponent implements OnInit {
  @Input() task?: Task;
  constructor() { }

  ngOnInit(): void {
  }
}
