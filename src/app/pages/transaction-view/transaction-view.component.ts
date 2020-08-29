import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/transaction.service';
import { Transaction } from 'src/app/models/transaction.model';
import * as moment from 'moment';

@Component({
  selector: 'app-transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.scss']
})
export class TransactionViewComponent implements OnInit {

  transactions: Transaction[];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getTransaction().subscribe((transactions: Transaction[]) => {
      this.transactions = transactions;
    })
  }

  getMomentAgo(date: any) {
    return moment(date).fromNow();
  }

}
