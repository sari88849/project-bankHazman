import { TestBed } from '@angular/core/testing';

import { LimitToTeacherService } from './limit-to-teacher.service';

describe('LimitToTeacherService', () => {
  let service: LimitToTeacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LimitToTeacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
