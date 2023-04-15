import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCompComponent } from './course-comp.component';

describe('CourseCompComponent', () => {
  let component: CourseCompComponent;
  let fixture: ComponentFixture<CourseCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
