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
  constructor(private sharedService: CommonAppService,private activatedRoute: ActivatedRoute) { }
  message:string;
  ngOnInit(): void {
    seconds.pipe(take(1))
    .subscribe(
      value => {
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

}
