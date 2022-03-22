import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Book, BookList} from "../models/kniha.model";
import {BookServiceService} from "../../book-service.service";
import {CustomerZoznam} from "../models/customer.model";


@Component({
  selector: 'app-kniha-stranka',
  templateUrl: './kniha-stranka.component.html',
  styleUrls: ['./kniha-stranka.component.css']
})
export class KnihaStrankaComponent implements OnInit{

  books: Book[] = [];
  aktBook?: Book;

  constructor(private router: Router, private bookService: BookServiceService) {

  }

  ngOnInit(): void {
    this.refreshBooks();
  }

  refreshBooks(): void {
    this.bookService.getBooks().subscribe(data => {
      console.log('Prislo:',data);
      this.books=data;
    });
  }

  goBack(): void{
    this.router.navigate(['']);
  }

  add(book: Book): void{
    this.bookService.createBook(book).subscribe( data => {
      console.log('Prislo: ', data);
      this.refreshBooks()
    });
  }

  edit(book: Book): void{
    const index = this.books.findIndex(bookArray => bookArray.id === book.id);
    // v () je funkcia co vracia hodnotu - bookFromList je vstupný argument -> zjednodusena forma zapisu funkcie
    if(index !== -1){
      this.books[index] = book;
    }
  }

  editBookFromList(book: Book): void{
    this.aktBook = book;
  }

  removeBookFromList(bookId: number): void {
    this.bookService.deleteBook(bookId).subscribe(data => {
      this.refreshBooks();
      });
    }


}
