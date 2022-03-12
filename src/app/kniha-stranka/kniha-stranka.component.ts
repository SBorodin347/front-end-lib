import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {KnihaFormularComponent} from "../kniha-formular/kniha-formular.component";
import  {KnihyZoznamComponent} from "../knihy-zoznam/knihy-zoznam.component";
import {Book} from "../models/kniha.model";


@Component({
  selector: 'app-kniha-stranka',
  templateUrl: './kniha-stranka.component.html',
  styleUrls: ['./kniha-stranka.component.css']
})
export class KnihaStrankaComponent {

  title = 'BOOK';

  constructor(private router: Router) {
  }

  books: Book[] = [];
  aktBook: Book = { id: "0", name: "The Hobbit", author: "J.R.R Tolkien", avialable: 10};

  add(book: Book): void{
    this.books.push(book);
  }

  edit(book: Book): void{
    const index = this.books.findIndex(bookFromList => bookFromList.id === book.id);
    // v () je funkcia co vracia hodnotu - bookFromList je vstupný argument -> zjednodusena forma zapisu funkcie
    if(index !== -1){
      this.books[index] = book;
    }
  }

  editBookFromList(book: Book): void{
    this.aktBook = book;
  }


  removeBookFromList(book: Book) {
    this.aktBook = book;
  }
}
