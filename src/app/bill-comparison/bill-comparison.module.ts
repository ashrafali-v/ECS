import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillComparisonComponent } from './bill-comparison.component';
import{BillComparisonRoutingModule} from './bill-comparison-routing.module'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [BillComparisonComponent],
  imports: [
    CommonModule,
    BillComparisonRoutingModule,
    NgxChartsModule,
    ChartsModule,
    NgbModule,
    FormsModule,
    BsDatepickerModule
  ]
})
export class BillComparisonModule { }
