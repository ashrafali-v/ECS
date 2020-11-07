import { Component, OnInit } from '@angular/core';
import {CommonAppService} from '../services/common-app.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  amount: boolean = true;
  kilowats: boolean = false;
  amountValue: number;
  kilowatsValue: number;
  accountType:any;
  gasUnit:any;
  constructor(private sharedService: CommonAppService,private activatedRoute: ActivatedRoute) { }
  message:string;
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      var account = params['account'];
      if(account){
        localStorage.accountKey = account;
      }
    });
    this.sharedService.getRecentDayUsage().subscribe(data => {
      this.amountValue = data.predictedAmount;
      this.kilowatsValue = data.predictedKwh;
      this.accountType = data.accountType;
      if(this.accountType == 'GAS'){
        localStorage.gasUnit = 'ccf';
        localStorage.gasSwitchText = 'CCF';
      }
      this.gasUnit = localStorage.gasUnit;
    });
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

}
