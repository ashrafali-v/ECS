import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyUsageComponent } from './daily-usage.component';


const routes: Routes = [
  {
    path: '',
    component: DailyUsageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyUsageRoutingModule { }