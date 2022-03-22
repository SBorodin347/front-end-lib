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
  editBook: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  removeBook: EventEmitter<number> = new EventEmitter<number>();

  edit(bookId: number): void{
    this.editBook.emit(bookId);
  }

  remove(bookId: number): void{
    this.removeBook.emit(bookId);
  }

}
