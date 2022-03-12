import { Component } from '@angular/core';
import {Router} from "@angular/router";

enum MENU{
  USERS,BOOKS,BORROWINGS
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'LIBRARY FORM';
  menu  = MENU;
  aktMenu = MENU.BOOKS;

  constructor(private router: Router) {
  }

  otvorMenu(m: MENU) {
    // preroutuj do komponenty podla menu
    if (m == MENU.USERS){
      this.router.navigate(['/users']);
    }

    if (m == MENU.BOOKS) {
      this.router.navigate(['/books']);
    }

    if (m == MENU.BORROWINGS) {
      this.router.navigate(['/borrowings']);
    }

  }

  public nastavMenu(m: MENU){
    this.aktMenu = m;
  }

  user = {id: 0, name: 'Anna Dobra', contact: 'a.dobra@example.com'}
  users: any = [];

  public addUser(): void{
    let u = {id: this.user.id, name: this.user.name, contact: this.user.contact}
    this.users.push(u);
  }


  borrowing = {id: 0, book: 'The Hobbit', user: "Anna Dobra"}
  borrowings: any = [];

  public addBorrowing(): void{
    let borrow = {id: this.borrowing.id, book: this.borrowing.book, user: this.borrowing.user}
    this.borrowings.push(borrow);
  }

}
