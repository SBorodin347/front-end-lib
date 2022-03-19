export class Book {
  id?: string;
  firstName: string;
  lastName: string;
  title: string;
  isbn: string;
  avialable: number;


  constructor(book: Book) {
    this.id = book.id;
    this.firstName = book.firstName;
    this.lastName = book.lastName;
    this.title = book.title;
    this.isbn = book.isbn;
    this.avialable = book.avialable;
  }
}

export class BookList {
  id?: string;
  firstName: string;
  lastName: string;
  title: string;
  isbn: string;
  avialable: number;

  constructor(book: BookList) {
    this.id = book.id;
    this.firstName = book.firstName;
    this.lastName = book.lastName;
    this.title = book.title;
    this.isbn = book.isbn;
    this.avialable = book.avialable;
  }
}
