import { Component, Input } from '@angular/core';
import { Chapter } from 'src/app/models/chapter.model';

@Component({
  selector: 'app-poets-card',
  templateUrl: './poets-card.component.html',
  styleUrls: ['./poets-card.component.scss']
})
export class PoetsCardComponent {
  @Input() chapter!: Chapter | null | undefined;
  constructor() { }

}
