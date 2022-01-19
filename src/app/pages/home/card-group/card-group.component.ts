import { Component, Input, OnInit } from '@angular/core';
import { BooksGroup } from 'src/app/models/books-group.model';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent implements OnInit {
  @Input() booksGroup:BooksGroup | undefined;
  img: string | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
