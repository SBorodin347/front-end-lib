import {Component, ComponentFactoryResolver, Input, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Customer, CustomerZoznam} from "../models/customer.model";
import {CustomerService} from "../../customer.service";
import {BorrowingFormPopupComponent} from "../borrowing-form-popup/borrowing-form-popup.component";
import {RefDirective} from "../ref.directive";


enum MENU { CUSTOMERS, BOOKS, BORROWINGS }

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menu = MENU;
  customers: CustomerZoznam[] = [];

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

  openMenu(m: MENU) {
    if (m === MENU.CUSTOMERS) {
      this.router.navigate(['/customers']);
    }
    if (m === MENU.BOOKS) {
      this.router.navigate(['/books']);
    }
    if (m === MENU.BORROWINGS) {
      this.router.navigate(['/borrowings']);
    }
  }





}
