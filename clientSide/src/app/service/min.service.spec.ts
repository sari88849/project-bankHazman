import { TestBed } from '@angular/core/testing';

import { MinService } from './min.service';

describe('MinService', () => {
  let service: MinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
