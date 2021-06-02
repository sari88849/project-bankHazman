import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByLimitComponent } from './by-limit.component';

describe('ByLimitComponent', () => {
  let component: ByLimitComponent;
  let fixture: ComponentFixture<ByLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
