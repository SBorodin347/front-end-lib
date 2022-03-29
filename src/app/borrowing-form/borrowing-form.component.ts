import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Borrowing, BorrowingList} from "../models/borrowing.model";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer, CustomerZoznam} from "../models/customer.model";
import {CustomerService} from "../../customer.service";
import {Book, BookList} from "../models/kniha.model";
import {BorrowingService} from "../../borrowing.service";
import {BookServiceService} from "../../book-service.service";
import * as moment from 'moment';
import 'moment/locale/pt-br';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-borrowing-form',
  templateUrl: './borrowing-form.component.html',
  styleUrls: ['./borrowing-form.component.scss']
})
export class BorrowingFormComponent{

  @Input()
  set borrowing(data: Borrowing){
    if(data) {
      this.fillForm(data);
    }
  }
  private subscription: Subscription = new Subscription();
  currentDate = moment().lang("en").format('DD.MM');

  @Input()
  borrowings: BorrowingList[] = [];

  @Input()
  books: Book[] = []

  @Input()
  customers: CustomerZoznam[] = [];

  @Output()
  addBorrowing = new EventEmitter<Borrowing>();

  form: FormGroup;
  submitted = false;

  constructor(private router: Router) {
    this.createForm();

  }
  private createForm(): void{
    this.form = new FormGroup({
      id: new FormControl(null),
      bookId: new FormControl(null, [Validators.required]),
      customerId: new FormControl(null, Validators.required),
      dateOfBorrowing: new FormControl(null),
      borrowingTerm: new FormControl(null, Validators.required),
      dateOfReturn: new FormControl(null,)
    });

  }

  private fillForm(borrowing: Borrowing): void{
    this.form.controls.id.setValue(borrowing.id);
    this.form.controls.bookId.setValue(borrowing.bookId);
    this.form.controls.customerId.setValue(borrowing.customerId);
    this.form.controls.dateOfBorrowing.setValue(borrowing.dateOfBorrowing);
    this.form.controls.borrowingTerm.setValue(borrowing.borrowingTerm);
    this.form.controls.dateOfReturn.setValue(borrowing.dateOfReturn);
  }

  public add(): void {
    if (this.form.valid) {
      this.addBorrowing.emit(this.form.value);
      this.form.reset();
      this.submitted = true;
     setTimeout(function () {
      location.reload();
       }, 1400);
    }
  }

  goBooks(): void{
    this.router.navigate(['/books']);
  }

  goCustomers(): void{
    this.router.navigate(['/customers']);
  }

  public bookSearch(book: Book): void{
    console.log(this.books.indexOf(book));
  }


}

