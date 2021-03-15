import { Component, OnInit } from '@angular/core';
import {CommonAppService} from '../services/common-app.service';
import { ActivatedRoute } from '@angular/router';
import { timeout,take } from 'rxjs/operators';
import { interval } from 'rxjs';
const seconds = interval(1000);
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  amount: boolean = true;
  kilowats: boolean = false;
  amountValue: number = 0;
  kilowatsValue: number = 0;
  accountType:any = 'ELECTRIC';
  gasUnit:any = 'ccf';
  accountTypes:any = [];
  selectedAccountType:any;
  constructor(private sharedService: CommonAppService,private activatedRoute: ActivatedRoute) {
      this.activatedRoute.queryParams.subscribe(params => {
        var account = params['account'];
        if(account){
          localStorage.accountKey = account;
        }
      });
      var accountNumber = localStorage.getItem('accountKey');

      this.sharedService.getAccountType(accountNumber).subscribe(data=>{
        this.accountTypes = data;
      });
      if(!localStorage.accountType){
        this.selectedAccountType = localStorage.accountType = "ELECTRIC";
      }else{
        this.selectedAccountType = localStorage.accountType;
      }
   }
  message:string;
  ngOnInit(): void {
    seconds.pipe(take(1))
    .subscribe(
      value => {
        this.sharedService.getRecentDayUsage().subscribe(data => {
          this.amountValue = data.predictedAmount;
          this.kilowatsValue = data.predictedKwh;
          this.accountType = localStorage.accountType;
          if(this.accountType == 'GAS'){
            localStorage.gasUnit = 'ccf';
            localStorage.gasSwitchText = 'CCF';
          }
          this.gasUnit = localStorage.gasUnit;
        });
      }, // Will emit numbers just as regular `interval` would.
      err => console.log(err),     // Will never be called.
    );
    this.sharedService.sharedMessage.subscribe(message =>{
      this.message = message;
      if(message == 'kilowats'){
        this.kilowats = true;
        this.amount = false;
      }else{
        this.amount = true;
        this.kilowats = false;
      }
    });
    
  }
  setAccountType(accountType:any){
    if(accountType == 0){
      localStorage.accountType = "ELECTRIC";
      localStorage.gasUnit = 'kWh';
      localStorage.gasSwitchText = 'KILOWATTS';
    }else{
      localStorage.accountType = "GAS";
      localStorage.gasUnit = 'ccf';
      localStorage.gasSwitchText = 'CCF';
    }
    this.selectedAccountType = localStorage.accountType;
    window.location.reload();
  }

}
