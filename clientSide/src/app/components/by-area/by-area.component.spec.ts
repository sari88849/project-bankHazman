import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByAreaComponent } from './by-area.component';

describe('ByAreaComponent', () => {
  let component: ByAreaComponent;
  let fixture: ComponentFixture<ByAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
