import {Component} from '@angular/core';
import {Borrowing} from "../models/borrowing.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-borrowing-formular',
  templateUrl: './borrowing-formular.component.html',
  styleUrls: ['./borrowing-formular.component.css']
})
export class BorrowingFormularComponent{
  borrowing: Borrowing = {id: 0, bookId: 0, customerId: 0}
  constructor(private router: Router) { }

  goHome(): void{
    this.router.navigate(['']);
  }

  goBooks(): void{
    this.router.navigate(['/books']);
  }

  goCustomers(): void{
    this.router.navigate(['/customers']);
  }
}

