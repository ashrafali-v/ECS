import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonAppService {
  private message = new BehaviorSubject('amount');
  sharedMessage = this.message.asObservable();
  constructor() { }
  nextMessage(message: string) {
    this.message.next(message)
  }
}
