import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Book, BookList} from "../models/kniha.model";
import {BookServiceService} from "../../book-service.service";
import {Customer, CustomerZoznam} from "../models/customer.model";


@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit{

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
    if(book.id!==undefined){
      this.bookService.updateBook(book.id, book).subscribe(data => {
        console.log('edited: ', book);
        this.refreshBooks();
      });
    }
  }

  editBookFromList(bookId: number): void{
    this.bookService.getBook(bookId).subscribe(data => {
      console.log('prislo: ' , data);
      this.aktBook = data;
    });
  }



  removeBookFromList(bookId: number): void {
    this.bookService.deleteBook(bookId).subscribe(data => {
      this.refreshBooks();
      });
    }

}
