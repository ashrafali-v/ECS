import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavingsTipsRoutingModule } from './savings-tips-routing.module';
import { SavingsTipsComponent } from './savings-tips.component';


@NgModule({
  declarations: [SavingsTipsComponent],
  imports: [
    CommonModule,
    SavingsTipsRoutingModule
  ]
})
export class SavingsTipsModule { }
