import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {BorrowingService} from "../../borrowing.service";
import {CustomerService} from "../../customer.service";
import {BookServiceService} from "../../book-service.service";
import {Customer, CustomerZoznam} from "../models/customer.model";
import {Book} from "../models/kniha.model";
import {Borrowing, BorrowingList} from "../models/borrowing.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-borrowing-form-popup',
  templateUrl: './borrowing-form-popup.component.html',
  styleUrls: ['./borrowing-form-popup.component.scss']
})
export class BorrowingFormPopupComponent implements OnInit, OnDestroy {

  @Output()
  close = new EventEmitter<void>();

  customers: CustomerZoznam[] = [];
  books: Book[] = [];
  borrowings: BorrowingList[] = [];
  actBorrowing?: Borrowing;

  constructor(private router: Router, private borrowingService: BorrowingService, private customerService: CustomerService, private bookService: BookServiceService) { }

  private subscription: Subscription = new Subscription();

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.refreshBorrowings();
    this.refreshCustomers();
    this.refreshBooks();
  }

  refreshBooks(): void {
    this.subscription.add(this.bookService.getBooks().subscribe(data => {
      console.log('Prislo:',data);
      this.books=data;
    }));
  }

  refreshBorrowings(): void{
    this.subscription.add(this.borrowingService.getBorrowings().subscribe(data => {
      console.log('Prislo:',data);
      this.borrowings = data;
    }));
  }
  refreshCustomers(): void{
    this.subscription.add(this.customerService.getCustomers().subscribe(data => {
      console.log('Prislo:',data);
      this.customers=data;
    }));
  }

  add(borrowing: Borrowing): void{
    this.subscription.add(this.borrowingService.createBorrowing(borrowing).subscribe(data => {
      console.log('prislo: ' + data);
      this.refreshBorrowings();
    }));
  }

}
