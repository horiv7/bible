import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BooksGroup } from 'src/app/models/books-group.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  oldTestimonyBooks$!: Observable<BooksGroup[]>;
  newTestimonyBooks$!: Observable<BooksGroup[]>;
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.newTestimonyBooks$ = this.booksService.getBooksGroupBible().pipe(map(el => el.filter(item => item.biblePart === 'Novi zavet')))
    this.oldTestimonyBooks$ = this.booksService.getBooksGroupBible().pipe(map(el => el.filter(item => item.biblePart === 'Stari zavet')))
  }

}
