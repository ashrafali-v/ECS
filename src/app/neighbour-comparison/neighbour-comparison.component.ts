import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { CommonAppService } from '../services/common-app.service';
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
  multiKwh: any[];
  multiAmountCurrent:any[];
  multiKWHCurrent:any[];
  lineChartDataAmount: any[];
  lineChartDataKwh: any[];
  view: any[];
  excessAmountLimit:any;
  goodAmountLimit:any;
  greatAmountLimit:any;
  excessKWHLimit:any;
  goodKWHLimit:any;
  greatKWHLimit:any;
  amountValueCurrent: any;
  kilowatsValueCurrent: any;
  excessAmountLimitCurrent:any;
  goodAmountLimitCurrent:any;
  greatAmountLimitCurrent:any;
  excessKWHLimitCurrent:any;
  goodKWHLimitCurrent:any;
  greatKWHLimitCurrent:any;
  neighbourEmoji:any;
  neighbourEmojiCurrent:any;
  neighbourUsageText:any;
  loader: boolean = true;
  accountType:any;
  gasUnit:any;
  gasSwitchText:any;
  /*-----------------Line chart config-----------------------------*/
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];
  public lineChartOptionsAmount: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
      display: false,
      labels: {
        fontSize: 12,
        fontFamily: 'Karla',
        //usePointStyle: true,
        boxWidth: 30,

      }
    },
    animation: {
      duration: 2000
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return '$' + value;
          },
          fontSize: 16,
          fontFamily: 'Karla',
        },
        gridLines: {
          display: true,
          borderDash: [8, 4]
        }
      }],
      xAxes: [{
        display: true, 
        gridLines: {
          display: false,//this will remove all the x-axis grid lines
          drawBorder: false,
        }
      }]
    }
  };
  public lineChartOptionsKwh: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
      display: false,
      labels: {
        fontSize: 12,
        fontFamily: 'Karla',
        //usePointStyle: true,
        boxWidth: 30,

      }
    },
    animation: {
      duration: 2000
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return value+'kWh';
          },
          fontSize: 16,
          fontFamily: 'Karla',
        },
        gridLines: {
          display: true,
          borderDash: [8, 4]
        }
      }],
      xAxes: [{
        display: true,
        gridLines: {
          display: false,//this will remove all the x-axis grid lines
          drawBorder: false,
        }
      }]
    }
  };
  public lineChartOptionsKwhGas: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
      display: false,
      labels: {
        fontSize: 12,
        fontFamily: 'Karla',
        //usePointStyle: true,
        boxWidth: 30,

      }
    },
    animation: {
      duration: 2000
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return value+'lpg';
          },
          fontSize: 16,
          fontFamily: 'Karla',
        },
        gridLines: {
          display: true,
          borderDash: [8, 4]
        }
      }],
      xAxes: [{
        display: true,
        gridLines: {
          display: false,//this will remove all the x-axis grid lines
          drawBorder: false,
        }
      }]
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#F16F3F'
    },
    {
      borderColor: '#230C57'
    },
    {
      borderColor: '#7033FF'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  /*-----------------Line chart config-----------------------------*/

  /*-----------------Bar chart config-----------------------------*/

  colorScheme = {
    domain: ['#F16F3F', '#230C57', '#7033FF', '#7033FF']
  };

  /*-----------------Bar chart config-----------------------------*/

  /*------------Dummy-------------*/
  series = [
    {
      "name": "Retired",
      "value": 20,
      "label": "20%"
    },
    {
      "name": "Employed",
      "value": 70,
      "label": "70%"
    },
    {
      "name": "Unemployed",
      "value": 10,
      "label": "10%"
    }
  ];

  pieChartLabel(series: any[], name: string): string {
      const item = series.filter(data => data.name === name);
      if (item.length > 0) {
          return item[0].label;
      }
      return name;
  }
  /*-------------------------*/
  constructor(private sharedService: CommonAppService) { }

  ngOnInit(): void {
    this.sharedService.nextMessage("amount");
    /*-----------------Bar chart config-----------------------------*/
    this.view = [320, 200];
    /*-----------------Bar chart config End-----------------------------*/
    this.lineChartData = [];
    // this.lineChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    // this.lineChartDataAmount = [{ data: [0, 200, 130, 210, 216, 250, 200], label: 'All Neighbours', fill: false },
    // { data: [0, 75, 125, 190, 200, 115, 130], label: 'Similar Homes', fill: false },
    // { data: [0, 150, 110, 170, 240, 225, 150], label: 'Your Usage', fill: false }];

    // this.lineChartDataKwh = [{ data: [0, 100, 130, 250, 116, 150, 210], label: 'All Neighbours', fill: false },
    // { data: [0, 175, 145, 180, 250, 215, 170], label: 'Similar Homes', fill: false },
    // { data: [0, 130, 210, 170, 200, 225, 150], label: 'Your Usage', fill: false }];
    this.accountType = localStorage.accountType;
    this.gasUnit = localStorage.gasUnit;
    this.gasSwitchText = localStorage.gasSwitchText;
    this.sharedService.getNeighbourBarchart().subscribe(data=>{
      this.multiAmount = data.dataAmount;
      this.multiKwh = data.dataKwh;
      this.amountValue = this.multiAmount[2].value;
      this.kilowatsValue = this.multiKwh[2].value;
      this.excessAmountLimit = data.excessAmount;
      this.goodAmountLimit = data.goodAmount;
      this.greatAmountLimit = data.greatAmount;
      this.excessKWHLimit = data.excessKwh;
      this.goodKWHLimit = data.goodKwh;
      this.greatKWHLimit = data.greatKwh;
      this.neighbourEmoji = data.neighbourEmoji;
      Object.assign(this.multiAmount);
      Object.assign(this.multiKwh)
    });
    this.sharedService.getNeighbourLinechart().subscribe(data=>{
      this.loader = false;
      this.lineChartLabels = data.dataLabels;
      this.lineChartDataAmount = data.dataLineAmount;
      this.lineChartDataKwh = data.dataLineKwh;
      this.lineChartData = this.lineChartDataAmount;
      
    });
    this.sharedService.getNeighbourCurrentMonth().subscribe(data => {
      this.multiAmountCurrent = data.dataAmount;
      this.multiKWHCurrent = data.dataKwh;
      this.amountValueCurrent = this.multiAmountCurrent[2].value;
      this.kilowatsValueCurrent = this.multiKWHCurrent[2].value;
      this.excessAmountLimitCurrent = data.excessAmount;
      this.goodAmountLimitCurrent = data.goodAmount;
      this.greatAmountLimitCurrent = data.greatAmount;
      this.excessKWHLimitCurrent = data.excessKwh;
      this.goodKWHLimitCurrent = data.goodKwh;
      this.greatKWHLimitCurrent = data.greatKwh;
      this.neighbourEmojiCurrent = data.neighbourEmoji;
      this.neighbourUsageText = data.neighbourText;
    });

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
