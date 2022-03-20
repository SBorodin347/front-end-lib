export class Book {
  id?: number;
  authorFirstName: string;
  authorLastName: string;
  title: string;
  isbn: string;
  bookCount: number;


  constructor(book: Book) {
    this.id = book.id;
    this.authorFirstName = book.authorFirstName;
    this.authorLastName = book.authorLastName;
    this.title = book.title;
    this.isbn = book.isbn;
    this.bookCount = book.bookCount;
  }
}

export class BookList {
  id?: number;
  firstName: string;
  lastName: string;
  title: string;
  isbn: string;
  bookCount: number;

  constructor(book: BookList) {
    this.id = book.id;
    this.firstName = book.firstName;
    this.lastName = book.lastName;
    this.title = book.title;
    this.isbn = book.isbn;
    this.bookCount = book.bookCount;
  }
}