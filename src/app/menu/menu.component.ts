import { Component } from '@angular/core';
import {Router} from '@angular/router';


enum MENU { OSOBY, KNIHY, VYPOZICKY }

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menu = MENU;

  constructor(private router: Router) { }

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
