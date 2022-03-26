import {Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Customer, CustomerZoznam} from "../models/customer.model";
import {Borrowing, BorrowingList} from "../models/borrowing.model";
import {Book} from "../models/kniha.model";
import {CustomerService} from "../../customer.service";
import {Observable} from "rxjs";
import {WindowComponent} from "../window/window.component";
import {RefDirective} from "../ref.directive";
import {Router} from "@angular/router";

@Component({
  selector: 'app-borrowing-zoznam',
  templateUrl: './borrowing-zoznam.component.html',
  styleUrls: ['./borrowing-zoznam.component.css']
})
export class BorrowingZoznamComponent{

  @ViewChild(RefDirective) refDir: RefDirective

  constructor(private resolver: ComponentFactoryResolver, private router: Router) {}

  showModal(){
    const modalFactory = this.resolver.resolveComponentFactory(WindowComponent);
    this.refDir.containerRef.clear();

    const component = this.refDir.containerRef.createComponent(modalFactory);
    component.instance.close.subscribe(() => {
      this.refDir.containerRef.clear();
    });
  }

  @Input()
  customers: CustomerZoznam[] = [];

  @Input()
  borrowings: BorrowingList[] = []

  @Output()
  editBorrowing: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  removeBorrowing: EventEmitter<number> = new EventEmitter<number>();

  edit(borrowingId: number): void{
    this.editBorrowing.emit(borrowingId);
  }

  remove(borrowingId: number): void{
    this.removeBorrowing.emit(borrowingId);
  }

  goBack(): void{
    this.router.navigate(['']);
  }

}
