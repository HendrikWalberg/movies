import { TestBed } from '@angular/core/testing';

import { MovieServiceService } from './movies.service';

describe('MovieServiceService', () => {
  let service: MovieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
