import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Customer} from "../models/customer.model";
import {FormControl, FormGroup} from "@angular/forms";

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

  // @Output()
  // removeCustomer = new EventEmitter<Customer>();

  form: FormGroup;

  constructor() {
    this.createForm();
  }

  private createForm(): void{
    this.form = new FormGroup({
      id: new FormControl(null),
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      contact: new FormControl(null)
    });
  }

  private fillForm(customer: Customer): void{
    // this.form.setValue({
    //   id: customer.id,
    //   firstName: customer.firstName,
    //   lastName: customer.lastName,
    //   contact: customer.contact
    // })
    this.form.controls.id.setValue(customer.id);
    this.form.controls.firstName.setValue(customer.firstName);
    this.form.controls.lastName.setValue(customer.lastName);
    this.form.controls.contact.setValue(customer.contact);
  }

  public add(): void{
    this.addCustomer.emit({
      id: Math.random().toString(),
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      contact: this.form.value.contact
    });
    this.form.reset();
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
