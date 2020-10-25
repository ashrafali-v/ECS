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
  devices:any = [];
  colors:any = [];
  view: any[];
  totalValue:any = 210;
    /*------------Donut Chart-------------*/
    series = [
      {
        "name": "Computer",
        "value": 130,
      },
      {
        "name": "Washer & Dryer",
        "value": 90,
      },
      {
        "name": "Dishwasher",
        "value": 340,
      },
      {
        "name": "Lighting",
        "value": 120,
      },
      {
        "name": "Electric oven",
        "value": 60,
      },{
        "name": "Cooling",
        "value": 560,
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
    this.devices = [
      {
        "name": "Computer",
        "value": 130,
      },
      {
        "name": "Washer & Dryer",
        "value": 90,
      },
      {
        "name": "Dishwasher",
        "value": 340,
      },
      {
        "name": "Lighting",
        "value": 120,
      },
      {
        "name": "Electric oven",
        "value": 60,
      },{
        "name": "Cooling",
        "value": 560,
      }
    ];
    this.colors = ['#7033FF', '#d43abc', '#f43579','#fec367','#68d29d','#507df7'];
  }
  percentageFormatting(c) {
    return Math.round(c);
  }
}
