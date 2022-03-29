import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Book, BookList} from "../models/kniha.model";
import {BookServiceService} from "../../book-service.service";
import {Customer, CustomerZoznam} from "../models/customer.model";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit, OnDestroy{

  books: Book[] = [];
  aktBook?: Book;

  private subscription: Subscription = new Subscription();

  constructor(private router: Router, private bookService: BookServiceService) {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.refreshBooks();
  }

  refreshBooks(): void {
    this.subscription.add(this.bookService.getBooks().subscribe(data => {
      console.log('Prislo:',data);
      this.books=data;
    }));
  }

  goBack(): void{
    this.router.navigate(['']);
  }

  add(book: Book): void{
    this.subscription.add(this.bookService.createBook(book).subscribe( data => {
      console.log('Prislo: ', data);
      this.refreshBooks()
    }));
  }


  edit(book: Book): void{
    if(book.id!==undefined){
      this.subscription.add(this.bookService.updateBook(book.id, book).subscribe(data => {
        console.log('edited: ', book);
        this.refreshBooks();
      }));
    }
  }

  editBookFromList(bookId: number): void{
    this.subscription.add(this.bookService.getBook(bookId).subscribe(data => {
      console.log('prislo: ' , data);
      this.aktBook = data;
    }));
  }



  removeBookFromList(bookId: number): void {
    this.subscription.add(this.bookService.deleteBook(bookId).subscribe(data => {
      this.refreshBooks();
      }));
    }

}
