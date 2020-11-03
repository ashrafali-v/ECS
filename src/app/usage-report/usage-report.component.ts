import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { HostListener } from "@angular/core";
import { CommonAppService } from '../services/common-app.service';
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
  series:any = [];
  loader: boolean = true;
    /*------------Donut Chart-------------*/
    //series = this.getUsagereport();
    colorScheme = {domain: ['#7033FF', '#d43abc', '#f43579','#fec367','#68d29d','#507df7']};
    /*-------------------------*/
  constructor(private sharedService: CommonAppService) { }
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
    this.sharedService.getUsageReport().subscribe(data => {
      this.loader = false;
      var series = data;
      this.devices = data;
      Object.assign(this, { series });
    });
    this.colors = ['#7033FF', '#d43abc', '#f43579','#fec367','#68d29d','#507df7'];
  }
  percentageFormatting(c) {
    return Math.round(c);
  }
}
