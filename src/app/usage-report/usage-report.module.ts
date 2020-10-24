import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsageReportRoutingModule } from './usage-report-routing.module';
import { UsageReportComponent } from './usage-report.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [UsageReportComponent],
  imports: [
    CommonModule,
    UsageReportRoutingModule,
    NgxChartsModule,
    ChartsModule
  ]
})
export class UsageReportModule { }
