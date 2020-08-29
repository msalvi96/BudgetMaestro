import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/transaction.service';
import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-annual-view',
  templateUrl: './annual-view.component.html',
  styleUrls: ['./annual-view.component.scss']
})
export class AnnualViewComponent implements OnInit {

  transactions: Transaction[];
  dataSource: Object;
  chartConfig: Object;
  constructor(private transactionService: TransactionService) {
    this.chartConfig = {
      width: '700',
      height: '400',
      type: 'column2d',
      dataFormat: 'json',
  };

  this.dataSource = {
      "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "candy",
      },
      "data": [{
        "label": "Venezuela",
        "value": "290"
      }, {
        "label": "Saudi",
        "value": "260"
      }, {
        "label": "Canada",
        "value": "180"
      }, {
        "label": "Iran",
        "value": "140"
      }, {
        "label": "Russia",
        "value": "115"
      }, {
        "label": "UAE",
        "value": "100"
      }, {
        "label": "US",
        "value": "30"
      }, {
        "label": "China",
        "value": "30"
      }]
    };
   }

  ngOnInit(): void {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), 1, 1).toJSON();
    var lastDay = new Date(date.getFullYear(), 12, 31).toJSON();
    this.transactionService.getTransactionByDate(firstDay, lastDay).subscribe((transactions: Transaction[]) => {
      this.transactions = transactions;
    })
  }

}
