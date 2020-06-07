import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgCircleProgressModule,
    NgxChartsModule
  ]
})
export class DashboardModule { }
