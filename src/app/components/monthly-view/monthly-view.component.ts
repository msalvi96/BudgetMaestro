import { Component, OnInit, Input } from '@angular/core';
import { TransactionService } from 'src/app/transaction.service';
import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-monthly-view',
  templateUrl: './monthly-view.component.html',
  styleUrls: ['./monthly-view.component.scss']
})
export class MonthlyViewComponent implements OnInit {

  chartConfig: Object;
  dataSource: Object;
  date: Date;

  constructor(private transactionService: TransactionService) {
    this.date = new Date();
    this.chartConfig = {
      width: '700',
      height: '400',
      type: 'doughnut2d',
      dataFormat: 'json',
  };
    this.transactionService.getTransactionMonthSummary().subscribe((data) => {
      this.dataSource = {
        "chart": {
          "caption": `Expenditure for the Month of ${this.date.toLocaleString('default', { month: 'long' })}`,
          "subCaption": "In Dollars $",
          "xAxisName": "Country",
          "yAxisName": "Reserves (MMbbl)",
          "numberPrefix": "$",
          "theme": "candy",
        },
        "data": data,
      }
    })
  }

  ngOnInit(): void {
  }

}
