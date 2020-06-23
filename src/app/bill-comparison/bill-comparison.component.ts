import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { CommonAppService } from '../services/common-app.service';

@Component({
  selector: 'app-bill-comparison',
  templateUrl: './bill-comparison.component.html',
  styleUrls: ['./bill-comparison.component.scss']
})
export class BillComparisonComponent implements OnInit {
  amount: boolean = true;
  kilowats: boolean = false;
  amountValue: number;
  kilowatsValue: number;
  view: any[] = [280, 240];
  multiAmount: any[];
  multikwh: any[];
  colorScheme: any = { domain: Array };
  datePickerStatus: boolean = false;
  model: NgbDateStruct;
  date: { year: number, month: number };

  //Delete
  public barChartOptions: ChartOptions = {
    responsive: true,

  };
  public barChartLabels: Label[] = ['2006', '2007', '2008'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [{
    "label": "My First Dataset",
    "data": Array<any>(),
    "fill": false,
    "backgroundColor": Array<any>(),
    "borderWidth": 1,
    "barThickness": 6,
  }
  ];
  //Delete

  constructor(private calendar: NgbCalendar, private sharedService: CommonAppService) { }

  ngOnInit(): void {
    //Delete
    let arr: any[];
    let backgroundColors: any[];
    backgroundColors = [
      "red",
      "green",
      "rgba(255, 205, 86, 0.2)"
    ];
    arr = [10, 15, 25];
    this.barChartData.push({
      data: arr,
      backgroundColor: backgroundColors
    })

    //Delete


    this.sharedService.nextMessage("amount");
    let colors: any[];
    this.amountValue = 128;
    this.kilowatsValue = 185;
    var multiAmount = [
      {
        "name": "2019 APR",
        "value": 12
      },
      {
        "name": "2019 March",
        "value": 20
      },
      {
        "name": "2020 APR",
        "value": 13
      }
    ];
    colors = [];
    multiAmount.forEach((element) => {
      console.log(element.value);
      if (element.value > 18) {
        colors.push("orange");
      } else {
        colors.push("blue");
      }
    })
    this.colorScheme.domain = colors;
    Object.assign(this, { multiAmount });
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
  yAxisTickFormatting(value) {
    if (this.amount) {
      return this.currencyTickFormatting(value);
    } else {
      return this.kwhTickFormatting(value);
    }
  }
  getDate() {
    this.datePickerStatus = true;
  }
  selectToday() {
    //this.model = this.calendar.getToday();
    this.datePickerStatus = false;
    console.log(this.model);
  }

}
