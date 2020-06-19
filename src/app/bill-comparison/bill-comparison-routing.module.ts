import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillComparisonComponent } from './bill-comparison.component';


const routes: Routes = [
  {
    path: '',
    component: BillComparisonComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillComparisonRoutingModule { }