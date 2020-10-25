import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-usage-report',
  templateUrl: './usage-report.component.html',
  styleUrls: ['./usage-report.component.scss']
})
export class UsageReportComponent implements OnInit {
  screenHeight: number;
  screenWidth: number;
  colorValues:any = [];
  view: any[];
  totalValue:any = 210;
    /*------------Donut Chart-------------*/
    series = [
      {
        "name": "Computer",
        "value": 20,
      },
      {
        "name": "Washer & Dryer",
        "value": 70,
      },
      {
        "name": "Dishwasher",
        "value": 10,
      },
      {
        "name": "Lighting",
        "value": 30,
      },
      {
        "name": "Electric oven",
        "value": 90,
      },{
        "name": "Cooling",
        "value": 45,
      }
    ];
     colorScheme = {
      domain: ['#7033FF', '#d43abc', '#f43579','#fec367','#68d29d','#507df7']
  };
    /*-------------------------*/
  constructor() { }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 992) {
      this.view = [640, 480];
    } else{
      this.view = [420, 300];
    } 
  }
  ngOnInit(): void {
  }
  percentageFormatting(c) {
    return Math.round(c);
  }
}
