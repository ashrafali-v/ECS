import { Component, OnInit, AfterViewInit } from '@angular/core';
import {CommonAppService} from '../services/common-app.service';
import { single } from '../data';
//import { multiAmount } from '../../data';
import { multikwh } from '../data';
import { ToastrService } from 'ngx-toastr';
import { HostListener } from "@angular/core";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  screenHeight: number;
  screenWidth: number;
  percent: any;
  percentProgressBarAmount: any;
  percentProgressBarAmountAlert: any;
  percentProgressBarkwh: any;
  percentProgressBarkwhAlert: any;
  title = 'test App';
  activeTab = 'bill';
  single: any[];
  multiAmount: any[];
  multikwh: any[];
  view: any[];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showDataLabel = true;
  //xAxisLabel = 'APRIL';
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel: any;

  amount: boolean = true;
  kilowats: boolean = false;
  amountValue: number;
  kilowatsValue: number;
  limitValue: number;
  progressbarMaxValueAmount: number;
  progressbarMaxValueKwh: number;
  amountAlertValue: number;
  kwhAlertValue: number;
  month: any;
  day: any;
  daysInCurrentMonth: number = 30;
  editStatus: boolean = false;
  bestDayAverageAmount: number;
  bestDayAveragekwh: number;

  colorScheme = {
    domain: ['#f8bc8a', '#ab8ef0', '#f8bc8a', '#ab8ef0', '#f8bc8a']
  };
  monthNames = ["Jan", "Feb", "March", "April", "May", "June",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  constructor(private toastr: ToastrService,private sharedService: CommonAppService) {
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 993) {
      this.view = [560,350];
    } else {
      this.view = [420,264];
    }
  }
  ngOnInit() {
    this.sharedService.nextMessage("amount");
    var multiAmount = [
      {
        "name": "22",
        "value": 12
      },
      {
        "name": "23",
        "value": 7
      },
      {
        "name": "24",
        "value": 13
      },
      {
        "name": "25",
        "value": 9
      },
      {
        "name": "26",
        "value": 13
      },
      {
        "name": "27",
        "value": 0
      },
      {
        "name": "28",
        "value": 0
      }
    ]
    this.getScreenSize();
    this.progressbarMaxValueAmount = 200;
    this.progressbarMaxValueKwh = 300;
    const wholeDay = 32;
    var day = new Date();
    this.month = this.monthNames[day.getMonth()];
    //recentday usage dats
    this.xAxisLabel = this.month;
    //
    let currentDay = day.getDate();
    let currentMonth = day.getMonth();
    let curreYear = day.getFullYear();
    this.day = day.getDate();
    this.amountValue = 128;
    this.kilowatsValue = 185;
    this.limitValue = 100;
    this.kwhAlertValue = 210;
    this.amountAlertValue = 185;
    this.daysInCurrentMonth = this.daysInMonth(currentMonth + 1, curreYear);
    this.percent = (currentDay / wholeDay) * 100;
    this.percentProgressBarAmount = (this.amountValue / this.progressbarMaxValueAmount) * 100;
    console.log(this.percentProgressBarAmount);
    this.percentProgressBarAmountAlert = (this.amountAlertValue / this.progressbarMaxValueAmount) * 100;
    this.percentProgressBarAmountAlert = 100 - this.percentProgressBarAmountAlert;
    this.bestDayAverageAmount = 23;
    this.bestDayAveragekwh = 46;
    console.log(this.percentProgressBarAmountAlert);
    function yAxisTickFormatting(value) {
      if (this.amount) {
        return this.currencyTickFormatting(value);
      } else {
        return this.kwhTickFormatting(value);
      }
    }
    Object.assign(this, { multiAmount });
    Object.assign(this, { multikwh })
  }
  ngAfterViewInit() {
    if (this.amountValue >= this.amountAlertValue) {
      if (!localStorage.exceedLimit) {
        localStorage.setItem('exceedLimit', 'true');
        this.toastr.warning('You have exceeded the limit.!', 'Warning');
      }
    }
  }
  search(activeTab) {
    this.activeTab = activeTab;
  }

  result(activeTab) {
    this.activeTab = activeTab;
  }
  switchAction(chart) {
    if (chart == 'amount') {
      console.log('amount');

      this.amount = true;
      this.kilowats = false;
    } else {
      console.log('kilowats');
      this.amount = false;
      this.kilowats = true;
    }
  }
  daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  resetValue() {
    this.editStatus = false;
    if (this.amountValue < this.amountAlertValue) {
      localStorage.removeItem('exceedLimit');
    }
  }
  editLimitValue() {
    this.editStatus = true;
  }
  handleSelected($event) {
    if ($event.target.checked === true) {
      this.amount = false;
      this.kilowats = true;
      this.sharedService.nextMessage("kilowats");
    } else {
      this.amount = true;
      this.kilowats = false;
      this.sharedService.nextMessage("amount");
    }
  }
  currencyTickFormatting(val: any) {
    return '$' + val.toLocaleString();
  }
  kwhTickFormatting(val: any) {
    return val.toLocaleString() + ' kWh';
  }
}
