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
    HourlyUsage:'milestone/energy/hourlyUsage',
    BillComparison:'milestone/energy/billComparision',
    NeighbourBarchart:'milestone/energy/neighbourData',
    NeighbourLinechart:'milestone/energy/neighbourLineChart',
    NeighbourCurrentMonth:'milestone/energy/neighbourCurrentMonth',
    UsageReport:'milestone/energy/getUsageReport',
    AmountAlertValue:'milestone/energy/usageAlert'
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
  public getHourlyUsage(data:any){
    var url = this.ecsApiEndpoints['HourlyUsage'];
    url = url +"?date="+data;
    return this.httpClient.get(this.serviceBase+url,this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  public getBillComparison(data:any){
    var url = this.ecsApiEndpoints['BillComparison'];
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
  public getNeighbourCurrentMonth(){
    var url = this.ecsApiEndpoints['NeighbourCurrentMonth'];
    return this.httpClient.get(this.serviceBase+url, this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  public getUsageReport(){
    var url = this.ecsApiEndpoints['UsageReport'];
    return this.httpClient.get(this.serviceBase+url, this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  updateAlertValue(data:any){
    var url = this.ecsApiEndpoints['AmountAlertValue'];
    url = url +"?alertValue="+data;
    return this.httpClient.get(this.serviceBase+url, this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
}
