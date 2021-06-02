import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { INotLearnComponent } from './inot-learn.component';

describe('INotLearnComponent', () => {
  let component: INotLearnComponent;
  let fixture: ComponentFixture<INotLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ INotLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(INotLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
