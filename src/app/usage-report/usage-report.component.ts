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
  view: any[];
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
    domain:['#5AA454', '#A10A28', '#C7B42C','grey','black','orange']
  };
    /*-------------------------*/
  constructor() { }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 992) {
      this.view = [640, 480];
    } else if (this.screenWidth > 1368) {
      this.view = [420, 300];
    } 
  }
  ngOnInit(): void {
  }
  percentageFormatting(c) {
    return Math.round(c);
  }
}
