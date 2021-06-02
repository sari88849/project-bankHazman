import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCorrectComponent } from './user-correct.component';

describe('UserCorrectComponent', () => {
  let component: UserCorrectComponent;
  let fixture: ComponentFixture<UserCorrectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCorrectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCorrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
