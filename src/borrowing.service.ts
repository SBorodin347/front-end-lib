import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer, CustomerZoznam} from "./app/models/customer.model";
import {Observable} from "rxjs";
import {Borrowing, BorrowingList} from "./app/models/borrowing.model";

@Injectable({
  providedIn: 'root'
})
export class BorrowingService {
  private apiUrl = 'http://localhost:8080/api/borrowings';

  constructor(private http: HttpClient) { }

  createBorrowing(borrowing: Borrowing): Observable<Borrowing> {
    return this.http.post<Borrowing>(`${this.apiUrl}`, borrowing);
  }

  getBorrowings(): Observable<BorrowingList[]> {
    return this.http.get<BorrowingList[]>(`${this.apiUrl}`);
  }

  deleteBorrowing(borrowingId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${borrowingId}`);
  }


}
