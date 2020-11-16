import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { HostListener } from "@angular/core";
import { CommonAppService } from '../services/common-app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import{ViewReportComponent} from '../modals/view-report/view-report.component'
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
    colorScheme = {domain: ['#0069d9', '#8E24AA', '#D81B60','#FB8C00','#68d29d','#039BE5']};
    /*-------------------------*/
  constructor(private sharedService: CommonAppService,private modalService: NgbModal) { }
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
    this.colors = ['#7033FF', '#d43abc', '#f43579','#fec367','#00897B','#507df7'];
  }
  percentageFormatting(c) {
    return Math.round(c);
  }
  viewUsageReport(index:any){
    console.log('Modal');
    const viewReportModal = this.modalService.open(ViewReportComponent, {
      ariaLabelledBy: "modal-basic-title",
      size: "lg",
      scrollable: true,
      backdrop: 'static'
    });
    viewReportModal.componentInstance.modalTitle = "View Report";
    viewReportModal.componentInstance.deviceName = this.devices[index].name;
    viewReportModal.componentInstance.deviceCost = this.devices[index].value;
  }
}
