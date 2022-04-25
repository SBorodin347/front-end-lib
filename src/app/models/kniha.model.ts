export class Book {
  id?: number;
  authorFirstName: string;
  authorLastName: string;
  title: string;
  isbn: string;
  bookCount: number;
  numberOfPages: number;
  genres: String;

  constructor(book: Book) {
    this.id = book.id;
    this.authorFirstName = book.authorFirstName;
    this.authorLastName = book.authorLastName;
    this.title = book.title;
    this.isbn = book.isbn;
    this.bookCount = book.bookCount;
    this.numberOfPages = book.numberOfPages;
    this.genres = book.genres;
  }
}

export class BookList {
  id?: number;
  authorFirstName: string;
  authorLastName: string;
  title: string;
  isbn: string;
  bookCount: number;
  numberOfPages: number;
  genres: String;

  constructor(book: BookList) {
    this.id = book.id;
    this.authorFirstName = book.authorFirstName;
    this.authorLastName = book.authorLastName;
    this.title = book.title;
    this.isbn = book.isbn;
    this.bookCount = book.bookCount;
    this.numberOfPages = book.numberOfPages;
    this.genres = book.genres;
  }
}
