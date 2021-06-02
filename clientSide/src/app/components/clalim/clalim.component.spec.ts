import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClalimComponent } from './clalim.component';

describe('ClalimComponent', () => {
  let component: ClalimComponent;
  let fixture: ComponentFixture<ClalimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClalimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClalimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
