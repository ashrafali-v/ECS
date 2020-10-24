import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-usage-report',
  templateUrl: './usage-report.component.html',
  styleUrls: ['./usage-report.component.scss']
})
export class UsageReportComponent implements OnInit {
    /*------------Dummy-------------*/
    series = [
      {
        "name": "Computer",
        "value": 20,
        "label": "20%"
      },
      {
        "name": "Washer & Dryer",
        "value": 70,
        "label": "70%"
      },
      {
        "name": "Dishwasher",
        "value": 10,
        "label": "10%"
      },
      {
        "name": "Lighting",
        "value": 30,
        "label": "70%"
      },
      {
        "name": "Electric oven",
        "value": 90,
        "label": "10%"
      },{
        "name": "Cooling",
        "value": 45,
        "label": "70%"
      }
    ];
    /*-------------------------*/
  constructor() { }

  ngOnInit(): void {
  }

}
