import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsageReportRoutingModule } from './usage-report-routing.module';
import { UsageReportComponent } from './usage-report.component';


@NgModule({
  declarations: [UsageReportComponent],
  imports: [
    CommonModule,
    UsageReportRoutingModule
  ]
})
export class UsageReportModule { }
