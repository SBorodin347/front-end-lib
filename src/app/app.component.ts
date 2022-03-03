import { Component} from '@angular/core';
import {Router} from "@angular/router"

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

  constructor(private router: Router) {
  }

  otvorMenu(m: MENU){
    if(m == MENU.USERS){
      this.router.navigate(['/users']);
    }
  }

}
