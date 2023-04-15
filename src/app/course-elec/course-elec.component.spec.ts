import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseElecComponent } from './course-elec.component';

describe('CourseElecComponent', () => {
  let component: CourseElecComponent;
  let fixture: ComponentFixture<CourseElecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseElecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseElecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
