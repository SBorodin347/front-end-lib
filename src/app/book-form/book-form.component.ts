import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../models/kniha.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

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

  constructor(private router: Router) {
    this.createForm();
  }

  private createForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      authorFirstName: new FormControl(null, Validators.required),
      authorLastName: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      isbn: new FormControl(null, Validators.required),
      bookCount: new FormControl(null, [Validators.required, Validators.min(1)])
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
    if(this.form.valid){
      this.addBook.emit(this.form.value);
      this.form.reset();
    }
  }

  public edit(): void{
    this.editBook.emit(this.form.value);
    this.form.reset();
  }

  public remove(): void{
    this.book = undefined;
    this.form.reset();
  }

  goHome(): void{
    this.router.navigate(['/']);
  }
  goBorrowings(): void{
    this.router.navigate(['/borrowings']);
  }
  goCustomers(): void{
    this.router.navigate(['/customers']);
  }
}
