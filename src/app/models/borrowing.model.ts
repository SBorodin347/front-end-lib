import {Customer, CustomerZoznam} from "./customer.model";
import {CustomerService} from "../../customer.service";

export class Borrowing{

  id?: number;
  bookId: number;
  customerId: number;
  dateOfBorrowing: String;
  borrowingTerm: number;
  dateOfReturn: String;

  constructor(borrowing: Borrowing) {
    this.id = borrowing.id;
    this.bookId = borrowing.bookId;
    this.customerId = borrowing.customerId;
    this.dateOfBorrowing = borrowing.dateOfBorrowing;
    this.borrowingTerm = borrowing.borrowingTerm;
    this.dateOfReturn = borrowing.dateOfReturn;
  }

}

export class BorrowingList{
  id?: number;
  bookId: number;
  customerId: number;
  dateOfBorrowing: String;
  borrowingTerm: number;
  dateOfReturn: String;

  constructor(borrowing: BorrowingList) {
    this.id = borrowing.id;
    this.bookId = borrowing.bookId;
    this.customerId = borrowing.customerId;
    this.dateOfBorrowing = borrowing.dateOfBorrowing;
    this.borrowingTerm = borrowing.borrowingTerm;
    this.dateOfReturn = borrowing.dateOfReturn;
  }
}
