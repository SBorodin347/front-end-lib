import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Customer, CustomerZoznam} from "../models/customer.model";

@Component({
  selector: 'app-customer-zoznam',
  templateUrl: './customer-zoznam.component.html',
  styleUrls: ['./customer-zoznam.component.css']
})
export class CustomerZoznamComponent{
  constructor() {}

  @Input()
  customers: CustomerZoznam[] = [];

  @Output()
  editCustomer: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  removeCustomer: EventEmitter<number> = new EventEmitter<number>();

  edit(customerId: number): void{
    this.editCustomer.emit(customerId);
  }

  remove(customerId: number): void{
    this.removeCustomer.emit(customerId);
  }


}
