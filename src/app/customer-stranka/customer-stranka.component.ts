import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Customer, CustomerZoznam} from "../models/customer.model";
import {CustomerService} from "../../customer.service";



@Component({
  selector: 'app-customer-stranka',
  templateUrl: './customer-stranka.component.html',
  styleUrls: ['./customer-stranka.component.css']
})
export class CustomerStrankaComponent implements OnInit{

    customers: CustomerZoznam[] = [];
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
         this.customers=data;
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
      if(customer.id!==undefined){
        this.customerService.updateCustomer(customer.id, customer).subscribe(data => {
          console.log('edited: ', customer);
          this.refreshCustomers();
        });
      }
    }

    editCustomerFromList(customerId: number): void{
      this.customerService.getCustomer(customerId).subscribe(data => {
        console.log('prislo: ' , data);
        this.actCustomer = data;
      });
    }

    removeCustomerFromList(customerId: number): void{
      this.customerService.deleteCustomer(customerId).subscribe(data => {
        this.refreshCustomers();
      });

    }
}
