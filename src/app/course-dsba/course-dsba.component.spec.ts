import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDsbaComponent } from './course-dsba.component';

describe('CourseDsbaComponent', () => {
  let component: CourseDsbaComponent;
  let fixture: ComponentFixture<CourseDsbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDsbaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDsbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
