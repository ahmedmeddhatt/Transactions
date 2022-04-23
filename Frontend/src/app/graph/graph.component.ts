import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './../transactions.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  allTransaction: any;
  sellerTrans: any;
  constructor(public _TransactionsService: TransactionsService) {}

  ngOnInit(): void {
    this._TransactionsService.getAllTransactions().subscribe((data) => {
      this.allTransaction = data;
    });
    this._TransactionsService.getSellerTransactions(6).subscribe((data) => {
      this.sellerTrans = data;
    });
  }
}
