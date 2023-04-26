import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewtipComponent } from './interviewtip.component';

describe('InterviewtipComponent', () => {
  let component: InterviewtipComponent;
  let fixture: ComponentFixture<InterviewtipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewtipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewtipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
