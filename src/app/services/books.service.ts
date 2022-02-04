import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of, take, tap } from 'rxjs';
import { getBooksGroup } from '../data/books-group.data';
import { Book } from '../models/book.model';
import { Chapter } from '../models/chapter.model';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private bibleParts = of(getBooksGroup());
  private chapter$ = new BehaviorSubject<Chapter>({} as Chapter);
  private book$ = new BehaviorSubject<Book>({} as Book);
  private books$ = new BehaviorSubject<Book[]>([]);
  private title$ = new BehaviorSubject<string>('Title')


  products: any = [];
  constructor(private httpClient: HttpClient) { }

  getBooksGroupBible() {
    return this.bibleParts;
  }

  getBooks() {
    return this.books$;
  }
  getBook() {
    return this.book$;
  }

  getChapter() {
    return this.chapter$;
  }
  getTitle() {
    return this.title$;
  }
  setTitle(title: string) {
    this.title$.next(title)
  }
  getBooksByParams(params: string) {
    this.setTitle(params)
    this.httpClient.get("assets/data/books.json")
      .pipe(
        take(1),
        map(res => res as Book[]),
        map(books => books.filter(item => item.booksGroup.toLowerCase() === params)),
        map(r => r as Book[]),
        catchError((err, caught) => caught))
      .subscribe(data => {
        this.books$.next(data)
      })
  }

  getBookByParams(params: string) {
    this.setTitle(params)
    let url = `assets/data/${params}.json`
    this.httpClient.get(url).pipe(
      take(1), map(r => r as Book)).subscribe(data => {
        this.book$.next(data)
        this.setTitle(data.title)
      })
  }

  getChapterByParams(params: string) {
    this.setTitle(params)
    this.book$.pipe(
      take(1),
      map(book => book.chapters),
      map(chs => chs.filter(ch => ch.id === params)),
      map(c => c[0] as Chapter),
      catchError((err, caught) => caught))
      .subscribe(data => {
        this.chapter$.next(data)
        this.setTitle(data.title)

      })
  }

}
