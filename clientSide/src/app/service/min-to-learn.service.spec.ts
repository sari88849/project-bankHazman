import { TestBed } from '@angular/core/testing';

import { MinToLearnService } from './min-to-learn.service';

describe('MinToLearnService', () => {
  let service: MinToLearnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinToLearnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
