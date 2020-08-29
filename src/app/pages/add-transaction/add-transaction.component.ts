import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../transaction.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Transaction } from 'src/app/models/transaction.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent implements OnInit {

  title: string = "";
  amount: number = 0.00;
  category: string;
  date: any;
  categories: string[] = ['Utilities', 'Rent', 'Grocery', 'Shopping', 'Subscriptions', 'Other'];

  constructor(private transactionService: TransactionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.date = Date.now();
    this.category = 'Utilities';
    this.getSelectedItems();
  }

  createTransaction() {
    this.transactionService.createTransaction(this.title, this.amount, this.date, this.category).subscribe((newTransaction: Transaction) => {
      this.router.navigate(['../'], { relativeTo: this.route })
    });
  }

  onItemChange(item) {
    this.getSelectedItems();
  }

  getSelectedItems() {
    this.category = this.categories.find(item => item == this.category)
  }

}
