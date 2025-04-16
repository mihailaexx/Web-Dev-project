import { TestBed } from '@angular/core/testing';

import { CategoriesoffcanvasService } from './categoriesoffcanvas.service';

describe('CategoriesoffcanvasService', () => {
  let service: CategoriesoffcanvasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesoffcanvasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
