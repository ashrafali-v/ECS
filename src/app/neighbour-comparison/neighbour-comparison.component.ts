import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import {CommonAppService} from '../services/common-app.service';
@Component({
  selector: 'app-neighbour-comparison',
  templateUrl: './neighbour-comparison.component.html',
  styleUrls: ['./neighbour-comparison.component.scss']
})
export class NeighbourComparisonComponent implements OnInit {
  amount: boolean = true;
  kilowats: boolean = false;
  amountValue: number;
  kilowatsValue: number;
  multiAmount: any[];
  multiKwh:any[];
  lineChartDataAmount:any[];
  lineChartDataKwh:any[];
  view: any[];
  /*-----------------Line chart config-----------------------------*/
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    legend: { 
      position: 'top',
      labels: {
        fontSize: 7,
        //usePointStyle: true,
        boxWidth:30
      }
    },
    animation: {
      duration:2000
    },
    layout: {
      padding: {
          left: 10,
          right: 0,
          top: 0,
          bottom: 0
      }
    },
    scales: {
      yAxes: [{
          ticks: {
              // Include a dollar sign in the ticks
              callback: function(value, index, values) {
                  return '$' + value;
              },
              fontSize:10
          },
          gridLines: {
            display: false,
          }
      }],
      xAxes: [{
        display: false, //this will remove all the x-axis grid lines
        gridLines: {
          drawBorder: false,
        }
      }]
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#fd7e14'
    },
    {
      borderColor: 'black'
    },
    {
      borderColor: 'blue'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  /*-----------------Line chart config-----------------------------*/

  /*-----------------Bar chart config-----------------------------*/

  colorScheme = {
    domain: ['#fd7e14', 'black', 'blue','blue']
  };

  /*-----------------Bar chart config-----------------------------*/
  constructor(private sharedService: CommonAppService) { }

  ngOnInit(): void {
  this.sharedService.nextMessage("amount");
  /*-----------------Bar chart config-----------------------------*/
  this.view = [300,200];
  this.multiAmount = [
    {
      "name": "All Neighbours",
      "value": 215
    },
    {
      "name": "Similar Homes",
      "value": 180
    },
    {
      "name": "Your Usage",
      "value": 198
    },
    {
      "name": "Your Current Month",
      "value": 63
    }
  ]
  this.multiKwh = [
    {
      "name": "All Neighbours",
      "value": 205
    },
    {
      "name": "Similar Homes",
      "value": 160
    },
    {
      "name": "Your Usage",
      "value": 188
    },
    {
      "name": "Your Current Month",
      "value": 83
    }
  ]
  Object.assign(this.multiAmount);
  Object.assign(this.multiKwh)
  /*-----------------Bar chart config End-----------------------------*/
    this.lineChartData =[];
    this.amountValue = 128;
    this.kilowatsValue = 185;
    this.lineChartLabels = ['1','2','3','4','5','6','7','8','9','10'];
    this.lineChartDataAmount = [{ data: [0, 200, 130, 210, 216, 250, 200], label: 'All Neighbours',fill: false },
    { data: [0, 75, 125, 190, 200, 115, 130], label: 'Similar Homes',fill: false },
    { data: [0, 150, 110, 170, 240, 225, 150], label: 'Your Usage',fill: false }];

    this.lineChartDataKwh = [{ data: [0, 100, 130, 250, 116, 150, 210], label: 'All Neighbours',fill: false },
    { data: [0, 175, 145, 180, 250, 215, 170], label: 'Similar Homes',fill: false },
    { data: [0, 130, 210, 170, 200, 225, 150], label: 'Your Usage',fill: false }];

    this.lineChartData = this.lineChartDataAmount;

  }
  handleSelected($event) {
    if ($event.target.checked === true) {
      this.amount = false;
      this.kilowats = true;
      this.sharedService.nextMessage("kilowats");
      this.lineChartData = [];
      this.lineChartData = this.lineChartDataKwh;
    } else {
      this.amount = true;
      this.kilowats = false;
      this.sharedService.nextMessage("amount");
      this.lineChartData = [];
      this.lineChartData = this.lineChartDataAmount;
    }
  }

}
