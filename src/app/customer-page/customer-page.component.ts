import {Component, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Customer, CustomerZoznam} from "../models/customer.model";
import {CustomerService} from "../../customer.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.scss']
})
export class CustomerPageComponent implements OnInit, OnDestroy{

    customers: CustomerZoznam[] = [];
    actCustomer?: Customer;

    private subscription: Subscription = new Subscription();

    constructor(private router: Router, private customerService: CustomerService) { }

    ngOnInit(): void {
      this.refreshCustomers();
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

  refreshCustomers(): void{
      this.subscription.add(this.customerService.getCustomers().subscribe(data => {
        console.log('Prislo:',data);
         this.customers=data;
      }));
    }


    add(customer: Customer): void{
      this.subscription.add(this.customerService.createCustomer(customer).subscribe(data => {
          console.log('prislo: ' + data);
          this.refreshCustomers();
        }));
    }

    edit(customer: Customer): void{
      if(customer.id!==undefined){
        this.subscription.add(this.customerService.updateCustomer(customer.id, customer).subscribe(data => {
          console.log('edited: ', customer);
          this.refreshCustomers();
        }));
      }
    }

    editCustomerFromList(customerId: number): void{
      this.subscription.add(this.customerService.getCustomer(customerId).subscribe(data => {
        console.log('prislo: ' , data);
        this.actCustomer = data;
      }));
    }

    removeCustomerFromList(customerId: number): void{
      this.subscription.add(this.customerService.deleteCustomer(customerId).subscribe(data => {
        this.refreshCustomers();
      }, error => {alert("!!!")}));
    }

  chodSpat(): void{
    this.router.navigate(['']);
  }
}
