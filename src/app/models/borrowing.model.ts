import {Customer, CustomerZoznam} from "./customer.model";
import {CustomerService} from "../../customer.service";

export class Borrowing{

  id?: number;
  bookId: number;
  customerId: number;

  constructor(borrowing: Borrowing) {
    this.id = borrowing.id;
    this.bookId = borrowing.bookId;
    this.customerId = borrowing.customerId;
  }

}

export class BorrowingList{
  id?: number;
  bookId: number;
  customerId: number;

  constructor(borrowing: BorrowingList) {
    this.id = borrowing.id;
    this.bookId = borrowing.bookId;
    this.customerId = borrowing.customerId;
  }
}
