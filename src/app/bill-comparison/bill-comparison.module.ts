import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillComparisonComponent } from './bill-comparison.component';
import{BillComparisonRoutingModule} from './bill-comparison-routing.module'
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [BillComparisonComponent],
  imports: [
    CommonModule,
    BillComparisonRoutingModule,
    NgxChartsModule
  ]
})
export class BillComparisonModule { }
