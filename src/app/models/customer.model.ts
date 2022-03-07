export class Customer{

  name: String;
  contact: String;

  constructor(customer: Customer) {
    this.name = customer.name;
    this.contact = customer.contact;
  }

}
