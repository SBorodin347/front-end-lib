import {Component, OnInit} from '@angular/core';
import {Customer} from "../models/customer.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-borrowing-stranka',
  templateUrl: './borrowing-stranka.component.html',
  styleUrls: ['./borrowing-stranka.component.css']
})
export class BorrowingStrankaComponent{
  constructor(private router: Router) {
  }
  customers: Customer[] = [];

  goBack(): void{
    this.router.navigate(['']);
  }
}
