import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LogsService {

  toggle: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  toggle$ = this.toggle.asObservable();
}
