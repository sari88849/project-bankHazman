import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveLessonComponent } from './save-lesson.component';

describe('SaveLessonComponent', () => {
  let component: SaveLessonComponent;
  let fixture: ComponentFixture<SaveLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
