import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddTransactionComponent } from './pages/add-transaction/add-transaction.component';
import { TransactionViewComponent } from './pages/transaction-view/transaction-view.component';
import { FormsModule } from '@angular/forms';
import { AddIncomeComponent } from './pages/add-income/add-income.component';
import { FusionChartsModule } from 'angular-fusioncharts';

import * as FusionCharts from 'fusioncharts';
import * as charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { MonthlyViewComponent } from './components/monthly-view/monthly-view.component';
import { AnnualViewComponent } from './components/annual-view/annual-view.component';

FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddTransactionComponent,
    TransactionViewComponent,
    AddIncomeComponent,
    MonthlyViewComponent,
    AnnualViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
