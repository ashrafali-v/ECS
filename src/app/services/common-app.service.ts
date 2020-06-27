import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonAppService {
  jsonHttpHeader: any;
  serviceBase = 'https://prod.schoolguard360.com/';
  ecsApiEndpoints = {
    RecentDayUsage:'milestone/energy/getUsageData'
  }
  private message = new BehaviorSubject('amount');
  sharedMessage = this.message.asObservable();
  constructor(private httpClient: HttpClient) { 
    this.jsonHttpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }
  nextMessage(message: string) {
    this.message.next(message)
  }
  public getRecentDayUsage(){
    var url = this.ecsApiEndpoints['RecentDayUsage'];
    return this.httpClient.get(this.serviceBase+url, this.jsonHttpHeader).pipe(
      map((res) => res)
    )
  }
}
