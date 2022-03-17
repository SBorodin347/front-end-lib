import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../models/kniha.model";
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

  @Input()
  set book(data: Book | undefined){
    if(data) {
      this.fillForm(data);
    }
  }
  formular: FormGroup;

  constructor() {
    this.formular = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null),
      author: new FormControl(null),
      available: new FormControl(null)
    });
  }

  private fillForm(book: Book): void{
    this.formular.setValue({
      id: book.id,
      name: book.name,
      author: book.author,
      available: book.available
    })
  }


  public add(): void{
    this.addBook.emit({
      id: Math.random().toString(),
      name: this.formular.value.name,
      author: this.formular.value.author,
      available: this.formular.value.available
    });
    this.formular.reset();
  }

  public edit(): void{
    this.editBook.emit(this.formular.value);
    this.formular.reset();
  }

  public remove(): void{
    this.book = undefined;
    this.formular.reset();
  }
}
