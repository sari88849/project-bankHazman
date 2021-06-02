import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHouersComponent } from './add-houers.component';

describe('AddHouersComponent', () => {
  let component: AddHouersComponent;
  let fixture: ComponentFixture<AddHouersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHouersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHouersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
