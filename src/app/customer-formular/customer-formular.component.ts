import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Customer} from "../models/customer.model";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-customer-formular',
  templateUrl: './customer-formular.component.html',
  styleUrls: ['./customer-formular.component.css']
})
export class CustomerFormularComponent{

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

  constructor() {
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
