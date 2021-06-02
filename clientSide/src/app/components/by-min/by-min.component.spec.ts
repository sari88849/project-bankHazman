import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByMinComponent } from './by-min.component';

describe('ByMinComponent', () => {
  let component: ByMinComponent;
  let fixture: ComponentFixture<ByMinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByMinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
