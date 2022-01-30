import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskingComponent } from './tasking/tasking.component';
import { DataComponent } from './data/data.component';
import { TaskPopupComponent } from './task-popup/task-popup.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { LogComponent } from './log/log.component';
import { AccountComponent } from './account/account.component';
import { CompleteTaskComponent } from './complete-task/complete-task.component';
import { DeferTaskComponent } from './defer-task/defer-task.component';
import { LogPopupComponent } from './log-popup/log-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskingComponent,
    DataComponent,
    TaskPopupComponent,
    TaskbarComponent,
    NewTaskComponent,
    LogComponent,
    AccountComponent,
    CompleteTaskComponent,
    DeferTaskComponent,
    LogPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
