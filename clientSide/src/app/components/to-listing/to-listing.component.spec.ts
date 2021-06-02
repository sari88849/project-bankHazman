import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToListingComponent } from './to-listing.component';

describe('ToListingComponent', () => {
  let component: ToListingComponent;
  let fixture: ComponentFixture<ToListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
