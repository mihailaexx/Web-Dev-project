import { TestBed } from '@angular/core/testing';

import { FetchproductsService } from './fetchproducts.service';

describe('FetchproductsService', () => {
  let service: FetchproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
