import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Customer} from "../models/customer.model";
import {CustomerService} from "../../customer.service";

@Component({
  selector: 'app-customer-stranka',
  templateUrl: './customer-stranka.component.html',
  styleUrls: ['./customer-stranka.component.css']
})
export class CustomerStrankaComponent implements OnInit{

    customers: Customer[] = [];
    actCustomer?: Customer;

    constructor(private router: Router, private customerService: CustomerService) { }

    ngOnInit(): void {
      // httpclient kniznica
      // this.customerService.getCustomers().subscribe(data => {
      //   this.customers = data;
      //   console.log('Prislo: ' + data);
      // });
      this.refreshCustomers();
    }

    refreshCustomers(): void{
      this.customerService.getCustomers().subscribe(data => {
        console.log('Prislo:',data);
        this.customers = [];
        for (const d of data){
          this.customers.push({id: d.id, firstName: d.firstName, lastName: d.lastName, contact: d.contact});
        }
      });
    }

    chodSpat(): void{
      this.router.navigate(['']);
    }

  // musela som to spravit takto, kedze mi inak hadzalo POST error 400 a do IDEA pisalo:
  // 'Cannot deserialize value of type `long` from String "0.45758060280826385"'
  // je tam nejaky problem s tym id aj ked mam vsetko rovnako ako je vo vzorovom priklade
    add(customer: Customer): void{
      // console.log('Prislo:',customer.id);
      this.customerService.createCustomer({
        firstName: customer.firstName,
        lastName: customer.lastName,
        contact: customer.contact}).subscribe(data => {
          console.log('prislo: ' + data);
          this.refreshCustomers();
        });
      // this.customers.push(customer);
    }

    edit(customer: Customer): void{
      // const index = this.customers.findIndex(customerFromList => customerFromList.id === customer.id);
      // if(index !== -1){
      //   this.customers[index] = customer;
      // }

      this.customerService.updateCustomer(customer.id, customer).subscribe(data => {
        console.log('edited: ', customer);
        this.refreshCustomers();
      });

    }

    editCustomerFromList(customer: Customer): void{
      this.actCustomer = customer;
    }

    removeCustomerFromList(customer: Customer): void{

      this.customerService.deleteCustomer(customer.id).subscribe(data => {
        console.log('deleted: ' + data);
        this.refreshCustomers();
      });

    }
}
