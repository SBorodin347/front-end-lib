import {Component, ComponentFactoryResolver, Input, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Customer, CustomerZoznam} from "../models/customer.model";
import {CustomerService} from "../../customer.service";
import {WindowComponent} from "../window/window.component";
import {RefDirective} from "../ref.directive";


enum MENU { OSOBY, KNIHY, VYPOZICKY }

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {



  menu = MENU;
  customers: CustomerZoznam[] = [];

  @ViewChild(RefDirective) refDir: RefDirective

  constructor(private router: Router, private customerService: CustomerService, private resolver: ComponentFactoryResolver) { }

  showModal(){
   const modalFactory = this.resolver.resolveComponentFactory(WindowComponent);
   this.refDir.containerRef.clear();

   const component = this.refDir.containerRef.createComponent(modalFactory);
   component.instance.close.subscribe(() => {
           this.refDir.containerRef.clear();
    });
  }

  ngOnInit(): void {

    this.refreshCustomers();
  }

  refreshCustomers(): void{
    this.customerService.getCustomers().subscribe(data => {
      console.log('Prislo:',data);
      this.customers=data;
    });
  }

  otvorMenu(m: MENU) {
    if (m === MENU.OSOBY) {
      this.router.navigate(['/customers']);
    }
    if (m === MENU.KNIHY) {
      this.router.navigate(['/books']);
    }
    if (m === MENU.VYPOZICKY) {
      this.router.navigate(['/borrowings']);
    }
  }





}
