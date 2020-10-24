import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsageReportComponent } from './usage-report.component';

const routes: Routes = [{ path: '', component: UsageReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsageReportRoutingModule { }
