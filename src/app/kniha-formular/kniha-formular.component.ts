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
      authorFirstName: new FormControl(null),
      authorLastName: new FormControl(null),
      title: new FormControl(null),
      isbn: new FormControl(null),
      bookCount: new FormControl(null)
    });
  }

  private fillForm(book: Book): void {
    this.form.controls["id"].setValue(book.id);
    this.form.controls["authorFirstName"].setValue(book.authorFirstName);
    this.form.controls["authorLastName"].setValue(book.authorLastName);
    this.form.controls["title"].setValue(book.title);
    this.form.controls["isbn"].setValue(book.isbn);
    this.form.controls["bookCount"].setValue(book.bookCount);
  }


  public add(): void{
    this.addBook.emit({
      authorFirstName: this.form.value.authorFirstName,
      authorLastName: this.form.value.authorLastName,
      title: this.form.value.title,
      isbn: this.form.value.isbn,
      bookCount: this.form.value.bookCount
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
