import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Book} from "../models/kniha.model";


@Component({
  selector: 'app-kniha-stranka',
  templateUrl: './kniha-stranka.component.html',
  styleUrls: ['./kniha-stranka.component.css']
})
export class KnihaStrankaComponent{

  books: Book[] = [];

  constructor(private router: Router) { }

  aktBook: Book = {name: 'The Hobbit', author: 'J.R.R Tolkien', available: 0};

  chodSpat(): void{
    this.router.navigate(['']);
  }

  add(book: Book): void{
    this.books.push(book);
  }

  edit(book: Book): void{
    const index = this.books.findIndex(bookFromList => bookFromList.id === book.id);
    if(index !== -1){
      this.books[index] = book;
    }
  }

  editBookFromList(book: Book): void{
    this.aktBook = book;
  }


  removeBookFromList(book: Book): void {
    const index = this.books.findIndex(bookArray => bookArray.id === book.id);
    if (index !== -1){
      this.books.splice(index, 1);
    }
  }

}
