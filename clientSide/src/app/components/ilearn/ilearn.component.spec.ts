import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ILearnComponent } from './ilearn.component';

describe('ILearnComponent', () => {
  let component: ILearnComponent;
  let fixture: ComponentFixture<ILearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ILearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ILearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
