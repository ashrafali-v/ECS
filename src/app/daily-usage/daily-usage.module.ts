import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyUsageComponent } from './daily-usage.component';
import{DailyUsageRoutingModule} from './daily-usage-routing.module'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [DailyUsageComponent],
  imports: [
    CommonModule,
    DailyUsageRoutingModule,
    NgxChartsModule,
    ChartsModule
  ]
})
export class DailyUsageModule { }
