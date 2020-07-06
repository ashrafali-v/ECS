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
    RecentDayUsage:'milestone/energy/getUsageData',
    DailyUsage:'milestone/energy/dailyUsage',
    BillComparison:'milestone/energy/billComparision',
    NeighbourBarchart:'milestone/energy/neighbourData',
    NeighbourLinechart:'milestone/energy/neighbourLineChart'
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
      map((res:any) => res)
    )
  }
  public getDailyUsage(){
    var url = this.ecsApiEndpoints['DailyUsage'];
    return this.httpClient.get(this.serviceBase+url, this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  public getBillComparison(){
    var url = this.ecsApiEndpoints['BillComparison'];
    var data = [   
      { "month": 5, "year": 2020 },
      { "month": 4, "year": 2020 },
      { "month": 3, "year": 2020 }
  ];
    return this.httpClient.post(this.serviceBase+url,data,this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  public getNeighbourBarchart(){
    var url = this.ecsApiEndpoints['NeighbourBarchart'];
    return this.httpClient.get(this.serviceBase+url, this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  public getNeighbourLinechart(){
    var url = this.ecsApiEndpoints['NeighbourLinechart'];
    return this.httpClient.get(this.serviceBase+url, this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
}
