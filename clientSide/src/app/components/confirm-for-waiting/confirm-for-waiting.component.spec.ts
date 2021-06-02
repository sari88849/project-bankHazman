import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmForWaitingComponent } from './confirm-for-waiting.component';

describe('ConfirmForWaitingComponent', () => {
  let component: ConfirmForWaitingComponent;
  let fixture: ComponentFixture<ConfirmForWaitingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmForWaitingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmForWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
