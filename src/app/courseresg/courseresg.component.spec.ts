import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseresgComponent } from './courseresg.component';

describe('CourseresgComponent', () => {
  let component: CourseresgComponent;
  let fixture: ComponentFixture<CourseresgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseresgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseresgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
