import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  public book$!: Observable<Book>;
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.book$ = this.booksService.getBook();
  }

}
