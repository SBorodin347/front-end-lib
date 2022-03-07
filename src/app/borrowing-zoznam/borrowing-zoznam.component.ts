import { Component, OnInit } from '@angular/core';
import {Customer} from "../models/customer.model";
import {Borrowing} from "../models/borrowing.model";

@Component({
  selector: 'app-borrowing-zoznam',
  templateUrl: './borrowing-zoznam.component.html',
  styleUrls: ['./borrowing-zoznam.component.css']
})
export class BorrowingZoznamComponent{
  borrowings: Borrowing[] = [];
  constructor() {}
}
