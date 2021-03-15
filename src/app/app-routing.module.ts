import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'daily-usage',loadChildren: () => import('./daily-usage/daily-usage.module').then(m => m.DailyUsageModule)},
  { path: 'bill-comparison',loadChildren: () => import('./bill-comparison/bill-comparison.module').then(m => m.BillComparisonModule)},
  { path: 'neighbor-comparison',loadChildren: () => import('./neighbour-comparison/neighbour-comparison.module').then(m => m.NeighbourComparisoModule)},
  { path: 'usage-report', loadChildren: () => import('./usage-report/usage-report.module').then(m => m.UsageReportModule) },
  { path: 'savings-tips', loadChildren: () => import('./savings-tips/savings-tips.module').then(m => m.SavingsTipsModule) },
  //{ path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
