import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/transaction.service';
import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(private transactionService: TransactionService) {

  }

  ngOnInit(): void {

  }



}
