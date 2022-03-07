import { Component, OnInit } from '@angular/core';
import {Book} from "../models/kniha.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-kniha-formular',
  templateUrl: './kniha-formular.component.html',
  styleUrls: ['./kniha-formular.component.css']
})
export class KnihaFormularComponent {

  book = {id: 0, name: 'The Hobbit', author: "J.R.R Tolkien", avial: 5}
  books: any = [];


  public addBook(): void{
    let b = {id: this.book.id, name: this.book.name, author: this.book.author, avialable: this.book.avial}
    this.books.push(b);
  }

  constructor() { }

}
