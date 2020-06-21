import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeighbourComparisonComponent } from './neighbour-comparison.component';
import{NeighbourComparisonRoutingModule} from './neighbour-comparison-routing.module'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NeighbourComparisonComponent],
  imports: [
    CommonModule,
    NeighbourComparisonRoutingModule,
    NgxChartsModule,
    ChartsModule,
    NgbModule,
    FormsModule
  ]
})
export class NeighbourComparisoModule { }
