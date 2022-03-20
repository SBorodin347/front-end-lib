import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "./app/models/kniha.model";

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private apiUrl = 'http://localhost:8080/api/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>( `${this.apiUrl}`);
  }

  getBook(bookId: string): Observable<Book> {
    return this.http.get<Book>( `${this.apiUrl}/${bookId}`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}`, book);
  }

  updateBook(bookId: string, book: Book): Observable<Book> {
    return this.http.put<Book>( `${this.apiUrl}/${bookId}`, book);
  }

  deleteBook(bookId: string): Observable<void> {
    return this.http.delete<void>( `${this.apiUrl}/${bookId}`);
  }

}
