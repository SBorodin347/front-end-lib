import {Component, OnInit} from '@angular/core';
import {Customer, CustomerZoznam} from "../models/customer.model";
import {Router} from "@angular/router";
import {Borrowing, BorrowingList} from "../models/borrowing.model";
import {Book, BookList} from "../models/kniha.model";
import {BorrowingService} from "../../borrowing.service";
import {CustomerService} from "../../customer.service";
import {BookServiceService} from "../../book-service.service";

@Component({
  selector: 'app-borrowing-page',
  templateUrl: './borrowing-page.component.html',
  styleUrls: ['./borrowing-page.component.css']
})
export class BorrowingPageComponent {

  customers: CustomerZoznam[] = [];
  books: Book[] = [];
  borrowings: BorrowingList[] = [];
  actBorrowing?: Borrowing;

  constructor(private router: Router, private borrowingService: BorrowingService, private customerService: CustomerService, private bookService: BookServiceService) {
  }

  ngOnInit(): void {
    this.refreshBorrowings();
    this.refreshCustomers();
    this.refreshBooks();
  }

  refreshBooks(): void {
    this.bookService.getBooks().subscribe(data => {
      console.log('Prislo:',data);
      this.books=data;
    });
  }

  refreshBorrowings(): void{
    this.borrowingService.getBorrowings().subscribe(data => {
      console.log('Prislo:',data);
      this.borrowings = data;
    });
  }
  refreshCustomers(): void{
    this.customerService.getCustomers().subscribe(data => {
      console.log('Prislo:',data);
      this.customers=data;
    });
  }

  add(borrowing: Borrowing): void{
    this.borrowingService.createBorrowing(borrowing).subscribe(data => {
      console.log('prislo: ' + data);
      this.refreshBorrowings();
    });
  }

  removeBorrowingFromList(borrowingId: number): void{
    this.borrowingService.deleteBorrowing(borrowingId).subscribe(data => {
      this.refreshBorrowings();
    });
  }

  goBack(): void{
    this.router.navigate(['']);
  }
}
