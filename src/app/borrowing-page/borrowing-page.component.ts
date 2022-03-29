import {Component, OnDestroy, OnInit} from '@angular/core';
import {Customer, CustomerZoznam} from "../models/customer.model";
import {Router} from "@angular/router";
import {Borrowing, BorrowingList} from "../models/borrowing.model";
import {Book, BookList} from "../models/kniha.model";
import {BorrowingService} from "../../borrowing.service";
import {CustomerService} from "../../customer.service";
import {BookServiceService} from "../../book-service.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-borrowing-page',
  templateUrl: './borrowing-page.component.html',
  styleUrls: ['./borrowing-page.component.scss']
})
export class BorrowingPageComponent implements OnInit, OnDestroy{

  customers: CustomerZoznam[] = [];
  books: Book[] = [];
  borrowings: BorrowingList[] = [];

  private subscription: Subscription = new Subscription();

  constructor(private router: Router, private borrowingService: BorrowingService, private customerService: CustomerService, private bookService: BookServiceService) {
  }

  ngOnInit(): void {
    this.refreshBorrowings();
    this.refreshCustomers();
    this.refreshBooks();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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

  removeBorrowingFromList(borrowingId: number): void{
    if(confirm('Naozaj?')){
      this.subscription.add(this.borrowingService.deleteBorrowing(borrowingId).subscribe(data => {
        this.refreshBorrowings();
      }));
    }
  }

  goBack(): void{
    this.router.navigate(['']);
  }
}
