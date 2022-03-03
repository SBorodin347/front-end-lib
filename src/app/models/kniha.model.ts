export class Book {

  meno: string;
  priezvisko: string;

  constructor(book: Book) {
    this.meno = book.meno;
    this.priezvisko = book.priezvisko;
  }

}
