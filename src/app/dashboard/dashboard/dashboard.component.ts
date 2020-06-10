import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from '../../data';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  percent:any;
  title = 'test App';
  activeTab = 'bill';
  single: any[];
  multi: any[];

  view: any[] = [400, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'APRIL';
  showYAxisLabel = true;
  yAxisLabel = 'Amount in $';
  amount:boolean = true;
  kilowats:boolean = false;
  amountValue:number;
  limitValue:number;
  kilowatsValue:number;
  month:any;
  daysInCurrentMonth:number=30;
  editStatus:boolean = false;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  monthNames = ["Jan", "Feb", "March", "April", "May", "June",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
  constructor() {
    Object.assign(this, { single })
   }
  ngOnInit() {
    const wholeDay = 32;
    var day = new Date();
    this.month = this.monthNames[day.getMonth()];
    let currentDay = day.getDate();
    let currentMonth = day.getMonth();
    let curreYear = day.getFullYear();
    this.amountValue = 128;
    this.kilowatsValue = 145;
    this.limitValue = 180;
    this.daysInCurrentMonth = this.daysInMonth(currentMonth+1, curreYear);
    this.percent = ( currentDay / wholeDay) * 100;
  }
  search(activeTab){
    this.activeTab = activeTab;
  }

  result(activeTab){
    this.activeTab = activeTab;
  }
  switchAction(chart){
    if(chart == 'amount'){
      console.log('amount');
      
      this.amount = true;
      this.kilowats = false;
    }else{
      console.log('kilowats');
      this.amount = false;
      this.kilowats = true;
    }
  }
  daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
  }
  resetValue(){
    this.editStatus = false;
  }
  editLimitValue(){
    this.editStatus = true;
  }
  handleSelected($event) {
    if ($event.target.checked === true) {
      this.amount = false;
      this.kilowats = true;
    }else{
      this.amount = true;
      this.kilowats = false;
    }
  }
}
