import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer, CustomerZoznam} from "../models/customer.model";
import {Borrowing, BorrowingList} from "../models/borrowing.model";
import {Book} from "../models/kniha.model";
import {CustomerService} from "../../customer.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-borrowing-zoznam',
  templateUrl: './borrowing-zoznam.component.html',
  styleUrls: ['./borrowing-zoznam.component.css']
})
export class BorrowingZoznamComponent{
  constructor() {}

  @Input()
  customers: CustomerZoznam[] = [];

  @Input()
  borrowings: BorrowingList[] = []

  @Output()
  editBorrowing: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  removeBorrowing: EventEmitter<number> = new EventEmitter<number>();

  edit(borrowingId: number): void{
    this.editBorrowing.emit(borrowingId);
  }

  remove(borrowingId: number): void{
    this.removeBorrowing.emit(borrowingId);
  }



}
