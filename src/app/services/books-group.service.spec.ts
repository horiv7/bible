import { TestBed } from '@angular/core/testing';

import { BooksGroupService } from './books-group.service';

describe('BooksGroupService', () => {
  let service: BooksGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
