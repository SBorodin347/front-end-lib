import {Component} from "@angular/core";
import {Customer} from "../models/customer.model";

@Component({
  selector: 'app-customer-formular',
  templateUrl: './customer-formular.component.html',
  styleUrls: ['./customer-formular.component.css']
})
export class CustomerFormularComponent{
  customer: Customer = {name: 'aaa', contact: 'a@b.com'}
  constructor() {}
}
