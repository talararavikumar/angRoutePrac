import { TestBed } from '@angular/core/testing';

import { LazyserviceService } from './lazyservice.service';

describe('LazyserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LazyserviceService = TestBed.get(LazyserviceService);
    expect(service).toBeTruthy();
  });
});
