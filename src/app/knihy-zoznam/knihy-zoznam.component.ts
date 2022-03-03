import { Component, OnInit } from '@angular/core';
import {Book} from "../models/kniha.model";

@Component({
  selector: 'app-knihy-zoznam',
  templateUrl: './knihy-zoznam.component.html',
  styleUrls: ['./knihy-zoznam.component.css']
})
export class KnihyZoznamComponent {


  books: Book[] = []

  constructor() { }

}
