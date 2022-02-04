import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { BooksService } from './books.service';

@Injectable({
  providedIn: 'root'
})
export class BooksResolver implements Resolve<boolean> {
  constructor(private booksService: BooksService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let params = ''

    if (route.paramMap.get("chapter")) {
      params = route.paramMap.get("chapter") as string
      this.booksService.getChapterByParams(params)
    } else if (route.paramMap.get("book")) {
      params = route.paramMap.get("book") as string
      this.booksService.getBookByParams(params)
    } else if (route.paramMap.get("part")) {
      params = route.paramMap.get("part") as string
      this.booksService.getBooksByParams(params)
    } else { }
    return true
  }
}
