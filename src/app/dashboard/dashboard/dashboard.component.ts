import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from '../../data';

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
  //showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'APRIL';
  showYAxisLabel = true;
  yAxisLabel = 'Amount in $';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single })
   }
  ngOnInit() {
    var wholeDay = 32;
    var d = new Date();
    var currentDay = d.getDate();
    this.percent = ( 8 / wholeDay) * 100;
    console.log(this.percent);
  }

  search(activeTab){
    this.activeTab = activeTab;
  }

  result(activeTab){
    this.activeTab = activeTab;
  }
}
