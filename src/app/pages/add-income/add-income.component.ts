import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.scss']
})
export class AddIncomeComponent implements OnInit {

  title: string = "";
  amount: number = 0.00;
  category: string = "Income";
  date: any;

  constructor(private transactionService: TransactionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.date = Date.now();
  }

  createIncome() {
    this.transactionService.createTransaction(this.title, this.amount, this.date, this.category).subscribe((newTransaction: Transaction) => {
      this.router.navigate(['../'], { relativeTo: this.route })
    });
  }

}
