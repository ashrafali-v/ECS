import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeighbourComparisonComponent } from './neighbour-comparison.component';


const routes: Routes = [
  {
    path: '',
    component: NeighbourComparisonComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeighbourComparisonRoutingModule { }