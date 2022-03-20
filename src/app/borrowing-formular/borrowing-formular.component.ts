import {Component} from '@angular/core';
import {Borrowing} from "../models/borrowing.model";

@Component({
  selector: 'app-borrowing-formular',
  templateUrl: './borrowing-formular.component.html',
  styleUrls: ['./borrowing-formular.component.css']
})
export class BorrowingFormularComponent{
  borrowing: Borrowing = {id: 0, bookId: 0, customerId: 0}
  constructor() { }

}

