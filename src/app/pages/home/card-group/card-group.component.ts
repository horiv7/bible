import { Component, Input} from '@angular/core';
import { BooksGroup } from 'src/app/models/books-group.model';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent{
  @Input() booksGroup: BooksGroup | undefined;
  constructor() { }
}
