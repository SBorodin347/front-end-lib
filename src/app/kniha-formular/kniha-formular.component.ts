import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../models/kniha.model";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-kniha-formular',
  templateUrl: './kniha-formular.component.html',
  styleUrls: ['./kniha-formular.component.css']
})
export class KnihaFormularComponent {

  @Output()
  addBook = new EventEmitter<Book>();

  @Output()
  editBook = new EventEmitter<Book>();

  @Output()
  removeBook = new EventEmitter<Book>();

  @Input()  //aby sme mohli z vonku nastavovat
  set book(b: Book){
    if(b) {
      this.formular.setValue({
        id: b.id,
        name: b.name,
        author: b.author,
        avialable: b.avialable
      });
    }
  }
  // book: Book = {id: 0, name: 'The Hobbit', author: "J.R.R Tolkien", avialable: 5}


  formular: FormGroup;

  constructor() {
    this.formular = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null),
      author: new FormControl(null),
      avialable: new FormControl(null)
    });
  }


  public add(): void{
    //this.addBook.emit(this.formular.value);
    this.addBook.emit({
      id: Math.random().toString(), //generovanie náhodného ID
      name: this.formular.value.name,
      author: this.formular.value.author,
      avialable: this.formular.value.avialable
    });
    this.formular.reset();
  }

  public edit(): void{
    this.editBook.emit(this.formular.value);
    // this.editBook.emit({
    //   id: this.formular.value.id,
    //   name: this.formular.value.name,
    //   author: this.formular.value.author,
    //   avialable: this.formular.value.avialable
    // });
    this.formular.reset();
  }

  public remove(): void{

  }
}
