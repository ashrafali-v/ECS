import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyUsageComponent } from './daily-usage.component';
import{DailyUsageRoutingModule} from './daily-usage-routing.module'

@NgModule({
  declarations: [DailyUsageComponent],
  imports: [
    CommonModule,
    DailyUsageRoutingModule
  ]
})
export class DailyUsageModule { }
