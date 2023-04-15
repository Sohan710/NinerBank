import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursecatelogComponent } from './coursecatelog.component';

describe('CoursecatelogComponent', () => {
  let component: CoursecatelogComponent;
  let fixture: ComponentFixture<CoursecatelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursecatelogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursecatelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
