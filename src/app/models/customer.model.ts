export class Customer{
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;

  constructor(customer: Customer) {
    this.id = customer.id;
    this.firstName = customer.firstName;
    this.lastName = customer.lastName;
    this.email = customer.email;
    this.phoneNumber = customer.phoneNumber;
  }

}

export class CustomerZoznam{
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;

  constructor(customer: CustomerZoznam) {
    this.id = customer.id;
    this.firstName = customer.firstName;
    this.lastName = customer.lastName;
    this.email = customer.email;
    this.phoneNumber = customer.phoneNumber;
  }
}
