import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from "../models/customer.model";
import {Borrowing} from "../models/borrowing.model";
import {Book} from "../models/kniha.model";

@Component({
  selector: 'app-borrowing-zoznam',
  templateUrl: './borrowing-zoznam.component.html',
  styleUrls: ['./borrowing-zoznam.component.css']
})
export class BorrowingZoznamComponent{

  @Input()
  borrowings: Borrowing[] = []

  @Output()
  editBorrowing: EventEmitter<Borrowing> = new EventEmitter<Borrowing>();

  @Output()
  removeBorrowing: EventEmitter<Borrowing> = new EventEmitter<Borrowing>();

  edit(borrowing: Borrowing): void{
    this.editBorrowing.emit(borrowing);
  }

  remove(borrowing: Borrowing): void{
    this.removeBorrowing.emit(borrowing);
  }
  constructor() {}
}
