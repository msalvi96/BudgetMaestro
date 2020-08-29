import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Transaction } from './models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private webReqService: WebRequestService) { }

  createTransaction(title: string, amount: number, date: Date, category: string) {
    return this.webReqService.post('transactions', {
      title,
      amount,
      category,
      date
    });
  }

  getTransaction() {
    return this.webReqService.get('transactions');
  }

  getTransactionByDate(startDate: string, endDate: string) {
    return this.webReqService.get(`transactions?startDate=${startDate}&endDate=${endDate}`);
  }

  getTransactionMonthSummary() {
    return this.webReqService.get('transactions/month-summary')
  }

  updateTransaction(trans: Transaction) {
    let { title, amount, date, category } = trans;
    return this.webReqService.patch(`transactions/${trans._id}`, {
      title,
      amount,
      date,
      category
    })
  }

  deleteTransaction(trans: Transaction) {
    return this.webReqService.delete(`transactions/${trans._id}`);
  }
}
