import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor(public _HttpClient: HttpClient) {}
  getSellerTransactions(id: any): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:3000/api/seller/transactions/${id}`
    );
  }
  getAllTransactions(): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:3000/api/seller/transactions/6/2022-04-22`
    );
  }
}
