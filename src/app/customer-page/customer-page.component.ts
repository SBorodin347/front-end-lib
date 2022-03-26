import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Customer, CustomerZoznam} from "../models/customer.model";
import {CustomerService} from "../../customer.service";



@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit{


    customers: CustomerZoznam[] = [];
    actCustomer?: Customer;

    constructor(private router: Router, private customerService: CustomerService) { }

    ngOnInit(): void {
      this.refreshCustomers();
    }

    refreshCustomers(): void{
      this.customerService.getCustomers().subscribe(data => {
        console.log('Prislo:',data);
         this.customers=data;
      });
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

  chodSpat(): void{
    this.router.navigate(['']);
  }
}
