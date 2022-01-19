import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BooksGroup } from 'src/app/models/books-group.model';
import { BooksGroupService } from 'src/app/services/books-group.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  oldTestemonyBooks: any;
  newTestemonyBooks: any;
  constructor(private booksGroupService: BooksGroupService) { }

  ngOnInit(): void {
    this.booksGroupService.getOldTestemony().subscribe(x => this.oldTestemonyBooks = x)
    this.booksGroupService.getNewTestemony().subscribe(x => this.newTestemonyBooks = x)
  }

}
