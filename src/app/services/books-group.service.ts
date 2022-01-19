import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { getBooksGroup } from '../data/books-group.data';

@Injectable({
  providedIn: 'root'
})
export class BooksGroupService {
  private source = of(getBooksGroup());

  constructor() { }

  getOldTestemony() {
    return this.source.pipe(map(items => items.filter(item => item.biblePart === 'Stari zavet')))
  }
  getNewTestemony() {
    return this.source.pipe(map(items => items.filter(item => item.biblePart === 'Novi zavet')))
  }
}
