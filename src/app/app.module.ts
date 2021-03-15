import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ProgressBarModule } from "angular-progress-bar"
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { NgMonthPickerModule } from 'ng-month-picker';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { HttpInterceptorProviders } from '../app/httpInterceptors/interceptor.providers';
import { ViewReportComponent } from './modals/view-report/view-report.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot(),
    NgxChartsModule,
    BrowserAnimationsModule,
    ProgressBarModule,
    FormsModule,
    ToastrModule.forRoot(),
    ChartsModule,
    NgbModule,
    NgMonthPickerModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule
  ],
  providers: [HttpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
