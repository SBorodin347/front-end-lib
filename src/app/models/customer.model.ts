export class Customer{
  id?: number;
  firstName: string;
  lastName: string;
  contact: string;

  constructor(customer: Customer) {
    this.id = customer.id;
    this.firstName = customer.firstName;
    this.lastName = customer.lastName;
    this.contact = customer.contact;
  }

}

export class CustomerZoznam{
  id?: number;
  firstName: string;
  lastName: string;
  contact: string;

  constructor(customer: CustomerZoznam) {
    this.id = customer.id;
    this.firstName = customer.firstName;
    this.lastName = customer.lastName;
    this.contact = customer.contact;
  }
}
