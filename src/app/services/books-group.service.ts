import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { getBooksGroup } from '../data/books-group.data';

@Injectable({
  providedIn: 'root'
})
export class BooksGroupService {
  private source = of(getBooksGroup());

  constructor() { }

  getBooksGroupBible(){
    return this.source;
  }
}
