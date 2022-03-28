import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../models/kniha.model";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  @Input()
  books: Book[] = []

  @Output()
  editBook: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  removeBook: EventEmitter<number> = new EventEmitter<number>();

  public searchString = ''

  quantityBagde(quantity) {
    return {
      'badge-success': quantity >= 3,
      'badge-danger': quantity < 3
    }
  }

  edit(bookId: number): void{
    this.editBook.emit(bookId);
  }

  remove(bookId: number): void{
    this.removeBook.emit(bookId);
  }

}
