import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BooksGroup } from 'src/app/models/books-group.model';
import { BooksGroupService } from 'src/app/services/books-group.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  oldTestemonyBooks!: BooksGroup[];
  newTestemonyBooks!: BooksGroup[];
  private source!: Subscription;
  constructor(private booksGroupService: BooksGroupService) { }

  ngOnInit(): void {
    this.source = this.booksGroupService.getBooksGroupBible().subscribe((x) => {
      this.oldTestemonyBooks = x.filter(item => item.biblePart === 'Stari zavet')
      this.newTestemonyBooks = x.filter(item => item.biblePart === 'Novi zavet')
    }
    )
  }
  ngOnDestroy(): void {
    this.source.unsubscribe()
  }
}
