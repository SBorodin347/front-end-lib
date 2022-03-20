import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Book} from "../models/kniha.model";
import {BookServiceService} from "../../book-service.service";


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
      console.log('prislo:', data);
      this.books = [];
      for (const d of data) {
        this.books.push({authorFirstName: d.authorFirstName, authorLastName: d.authorLastName, title: d.title, isbn: d.isbn, id: d.id, bookCount: d.bookCount});
      }
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


  removeBookFromList(book: Book) {
    const index = this.books.findIndex(bookArray => bookArray.id === book.id);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }


}