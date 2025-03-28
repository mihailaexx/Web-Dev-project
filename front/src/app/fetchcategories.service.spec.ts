import { TestBed } from '@angular/core/testing';

import { FetchcategoriesService } from './fetchcategories.service';

describe('FetchcategoriesService', () => {
  let service: FetchcategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchcategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
