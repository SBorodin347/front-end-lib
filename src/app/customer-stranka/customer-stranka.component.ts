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

    add(customer: Customer): void{
      this.customerService.createCustomer(customer).subscribe(data => {
        console.log('prislo: ' + data);
        this.refreshCustomers();
      });
      // this.customers.push(customer);
    }

    edit(customer: Customer): void{
      const index = this.customers.findIndex(customerFromList => customerFromList.id === customer.id);
      if(index !== -1){
        this.customers[index] = customer;
      }
    }

    editCustomerFromList(customer: Customer): void{
      this.actCustomer = customer;
    }

    removeCustomerFromList(customer: Customer): void{
      const index = this.customers.findIndex(customerArray => customerArray.id === customer.id);
      if (index !== -1){
        this.customers.splice(index, 1);
      }
    }
}
