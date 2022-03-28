import {Pipe, PipeTransform} from "@angular/core";
import {Book} from "../models/kniha.model";

@Pipe({
  name: 'booksFilterByTitle'
})
export class BooksFilterPipe implements PipeTransform{
  transform(books: Book[], search: string): Book[] {
    if (!search.trim()){
      return books;
    }
      return books.filter(book=>{
        return book.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
      })
  }
}

