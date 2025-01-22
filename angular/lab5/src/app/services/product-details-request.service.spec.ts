import { TestBed } from '@angular/core/testing';

import { ProductDetailsRequestService } from './product-details-request.service';

describe('ProductDetailsRequestService', () => {
  let service: ProductDetailsRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDetailsRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
