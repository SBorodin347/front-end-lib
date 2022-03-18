import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Customer} from "../models/customer.model";

@Component({
  selector: 'app-customer-zoznam',
  templateUrl: './customer-zoznam.component.html',
  styleUrls: ['./customer-zoznam.component.css']
})
export class CustomerZoznamComponent{
  constructor() {}

  @Input()
  customers: Customer[] = [];

  @Output()
  editCustomer: EventEmitter<Customer> = new EventEmitter<Customer>();

  @Output()
  removeCustomer: EventEmitter<Customer> = new EventEmitter<Customer>();

  edit(customer: Customer): void{
    this.editCustomer.emit(customer);
  }

  remove(customer: Customer): void{
    this.removeCustomer.emit(customer);
  }


}
