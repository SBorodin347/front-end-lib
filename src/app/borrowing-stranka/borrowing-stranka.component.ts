import {Component, OnInit} from '@angular/core';
import {Customer, CustomerZoznam} from "../models/customer.model";
import {Router} from "@angular/router";
import {Borrowing, BorrowingList} from "../models/borrowing.model";
import {Book} from "../models/kniha.model";
import {BorrowingService} from "../../borrowing.service";

@Component({
  selector: 'app-borrowing-stranka',
  templateUrl: './borrowing-stranka.component.html',
  styleUrls: ['./borrowing-stranka.component.css']
})
export class BorrowingStrankaComponent{

  borrowings: BorrowingList[] = [];
  actBorrowing?: Borrowing;

  constructor(private router: Router, private borrowingService: BorrowingService) {
  }

  ngOnInit(): void {
    this.refreshBorrowings();
  }

  refreshBorrowings(): void{
    this.borrowingService.getBorrowings().subscribe(data => {
      console.log('Prislo:',data);
      this.borrowings = data;
    });
  }


  add(borrowing: Borrowing): void{
    this.borrowingService.createBorrowing(borrowing).subscribe(data => {
      console.log('prislo: ' + data);
      this.refreshBorrowings();
    });
    // this.customers.push(customer);
  }

  goBack(): void{
    this.router.navigate(['']);
  }
}
