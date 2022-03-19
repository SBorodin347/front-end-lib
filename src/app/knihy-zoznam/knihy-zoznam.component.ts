import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../models/kniha.model";

@Component({
  selector: 'app-knihy-zoznam',
  templateUrl: './knihy-zoznam.component.html',
  styleUrls: ['./knihy-zoznam.component.css']
})
export class KnihyZoznamComponent {

  @Input()
  books: Book[] = []

  @Output()
  editBook: EventEmitter<Book> = new EventEmitter<Book>();

  @Output()
  removeBook: EventEmitter<Book> = new EventEmitter<Book>();

  edit(book: Book): void{
    this.editBook.emit(book);
  }

  remove(book: Book): void{
    this.removeBook.emit(book);
  }

}
