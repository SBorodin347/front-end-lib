import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../models/kniha.model";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-kniha-formular',
  templateUrl: './kniha-formular.component.html',
  styleUrls: ['./kniha-formular.component.css']
})
export class KnihaFormularComponent {

  @Input()
  set book(data: Book | undefined) {
    if (data) {
      this.fillForm(data);
    }
  }

  @Output()
  addBook = new EventEmitter<Book>();

  @Output()
  editBook = new EventEmitter<Book>();

  @Output()
  removeBook = new EventEmitter<Book>();

  form!: FormGroup;

  constructor() {
    this.createForm();
  }

  private createForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      title: new FormControl(null),
      isbn: new FormControl(null),
      avialable: new FormControl(null)
    });
  }

  private fillForm(book: Book): void {
    this.form.controls["id"].setValue(book.id);
    this.form.controls["firstName"].setValue(book.firstName);
    this.form.controls["lastName"].setValue(book.lastName);
    this.form.controls["title"].setValue(book.title);
    this.form.controls["isbn"].setValue(book.isbn);
    this.form.controls["avialable"].setValue(book.avialable);
  }


  public add(): void{
    this.addBook.emit({
      id: Math.random().toString(), //generovanie náhodného ID
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      title: this.form.value.title,
      isbn: this.form.value.isbn,
      avialable: this.form.value.avialable
    });
    this.form.reset();
  }

  public edit(): void{
    this.editBook.emit(this.form.value);
    this.form.reset();
  }

  public remove(): void{
    this.book = undefined;
    this.form.reset();
  }
}
