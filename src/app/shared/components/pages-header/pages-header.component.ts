import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-pages-header',
  templateUrl: './pages-header.component.html',
  styleUrls: ['./pages-header.component.scss']
})
export class PagesHeaderComponent implements OnInit {
  public title$!: Observable<string>


  constructor(private location: Location, private bookService: BooksService) { }

  ngOnInit(): void {
    this.title$ = this.bookService.getTitle()
  }

  back() {
    this.location.back()
  }

}
