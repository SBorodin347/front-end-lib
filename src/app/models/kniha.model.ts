export class Book {
  // ? = nepovinné
  id?: string;
  name: string;
  author: string;
  avialable: number;


  constructor(id: string, name: string, author: string, avialable: number) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.avialable = avialable;
  }
}
