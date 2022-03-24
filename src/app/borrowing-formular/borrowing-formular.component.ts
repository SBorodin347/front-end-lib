import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Borrowing} from "../models/borrowing.model";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer, CustomerZoznam} from "../models/customer.model";
import {CustomerService} from "../../customer.service";
import {Book, BookList} from "../models/kniha.model";
import {BorrowingService} from "../../borrowing.service";
import {BookServiceService} from "../../book-service.service";

@Component({
  selector: 'app-borrowing-formular',
  templateUrl: './borrowing-formular.component.html',
  styleUrls: ['./borrowing-formular.component.css']
})
export class BorrowingFormularComponent{

  @Input()
  set borrowing(data: Borrowing){
    if(data) {
      this.fillForm(data);
    }
  }

  @Input()
  books: Book[] = []

  @Input()
  customers: CustomerZoznam[] = [];

  @Output()
  addBorrowing = new EventEmitter<Borrowing>();

  form: FormGroup;

  constructor(private router: Router) {
    this.createForm();
  }

  private createForm(): void{
    this.form = new FormGroup({
      id: new FormControl(null),
      bookId: new FormControl(null, Validators.required),
      customerId: new FormControl(null, Validators.required),
    });
  }

  private fillForm(borrowing: Borrowing): void{
    this.form.controls.id.setValue(borrowing.id);
    this.form.controls.bookId.setValue(borrowing.bookId);
    this.form.controls.customerId.setValue(borrowing.customerId);
  }


  public add(): void {
    if(this.form.valid){
      this.addBorrowing.emit(this.form.value);
      this.form.reset();
    }
  }

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

