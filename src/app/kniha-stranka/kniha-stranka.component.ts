import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {KnihaFormularComponent} from "../kniha-formular/kniha-formular.component";
import  {KnihyZoznamComponent} from "../knihy-zoznam/knihy-zoznam.component";


@Component({
  selector: 'app-kniha-stranka',
  templateUrl: './kniha-stranka.component.html',
  styleUrls: ['./kniha-stranka.component.css']
})
export class KnihaStrankaComponent {

  title = 'BOOK';

  constructor(private router: Router) {
  }

  ngOnInit(): void{
  }

  addBook(){

  }



}
