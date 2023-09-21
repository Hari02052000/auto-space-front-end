import { TestBed } from '@angular/core/testing';

import { FetchProductServiceService } from './fetch-product-service.service';

describe('FetchProductServiceService', () => {
  let service: FetchProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
