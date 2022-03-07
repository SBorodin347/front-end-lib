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

  

}
