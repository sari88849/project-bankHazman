import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLimitComponent } from './add-limit.component';

describe('AddLimitComponent', () => {
  let component: AddLimitComponent;
  let fixture: ComponentFixture<AddLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
