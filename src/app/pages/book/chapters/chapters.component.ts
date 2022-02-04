import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})
export class ChaptersComponent {

  @Input() book: Book | null | undefined;

  constructor() { }

}
