import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddTransactionComponent } from './pages/add-transaction/add-transaction.component';
import { TransactionViewComponent } from './pages/transaction-view/transaction-view.component';
import { AddIncomeComponent } from './pages/add-income/add-income.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-transaction', component: AddTransactionComponent },
  { path: 'transactions', component: TransactionViewComponent },
  { path: 'add-income', component: AddIncomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
