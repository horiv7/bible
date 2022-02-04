import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Chapter } from 'src/app/models/chapter.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {
  public chapter$!: Observable<Chapter>;
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.chapter$ = this.booksService.getChapter()
  }

}
