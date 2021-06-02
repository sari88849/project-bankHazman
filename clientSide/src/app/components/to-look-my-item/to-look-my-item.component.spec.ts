import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToLookMyItemComponent } from './to-look-my-item.component';

describe('ToLookMyItemComponent', () => {
  let component: ToLookMyItemComponent;
  let fixture: ComponentFixture<ToLookMyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToLookMyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToLookMyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
