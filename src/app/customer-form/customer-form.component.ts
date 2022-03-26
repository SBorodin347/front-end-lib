import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Customer} from "../models/customer.model";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {

  modal = false;



  @Input()
  set customer(data: Customer){
    if(data) {
      this.fillForm(data);
    }
  }

  @Output()
  addCustomer = new EventEmitter<Customer>();

  @Output()
  editCustomer = new EventEmitter<Customer>();

  form: FormGroup;

  constructor(private router: Router) {
    this.createForm();
  }

  private createForm(): void{
    this.form = new FormGroup({
      id: new FormControl(null),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      contact: new FormControl(null, Validators.required)
    });
  }

  private fillForm(customer: Customer): void{
    this.form.controls.id.setValue(customer.id);
    this.form.controls.firstName.setValue(customer.firstName);
    this.form.controls.lastName.setValue(customer.lastName);
    this.form.controls.contact.setValue(customer.contact);
  }
  chodSpat(): void{
    this.router.navigate(['']);
  }
  goBooks(): void{
    this.router.navigate(['/books']);
  }

  goBorrowings(): void{
    this.router.navigate(['/borrowings']);
  }


  public add(): void{
    if(this.form.valid){
      this.addCustomer.emit(this.form.value);
      this.form.reset();
    }
  }

  public edit(): void{
    this.editCustomer.emit(this.form.value);
    this.form.reset();
  }

  public remove(): void{
    this.customer = undefined;
    this.form.reset();
  }

}
