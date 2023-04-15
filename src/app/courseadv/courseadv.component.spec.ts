import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseadvComponent } from './courseadv.component';

describe('CourseadvComponent', () => {
  let component: CourseadvComponent;
  let fixture: ComponentFixture<CourseadvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseadvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseadvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
