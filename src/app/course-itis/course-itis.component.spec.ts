import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItisComponent } from './course-itis.component';

describe('CourseItisComponent', () => {
  let component: CourseItisComponent;
  let fixture: ComponentFixture<CourseItisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseItisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseItisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
