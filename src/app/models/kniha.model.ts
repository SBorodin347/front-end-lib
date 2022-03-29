export class Book {
  id?: number;
  authorName: string;
  title: string;
  isbn: string;
  bookCount: number;
  numberOfPages: number;
  genres: String;

  constructor(book: Book) {
    this.id = book.id;
    this.authorName = book.authorName;
    this.title = book.title;
    this.isbn = book.isbn;
    this.bookCount = book.bookCount;
    this.numberOfPages = book.numberOfPages;
    this.genres = book.genres;
  }
}

export class BookList {
  id?: number;
  authorName: string;
  title: string;
  isbn: string;
  bookCount: number;
  numberOfPages: number;
  genres: String;

  constructor(book: BookList) {
    this.id = book.id;
    this.authorName = book.authorName;
    this.title = book.title;
    this.isbn = book.isbn;
    this.bookCount = book.bookCount;
    this.numberOfPages = book.numberOfPages;
    this.genres = book.genres;
  }
}
