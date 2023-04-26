import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumebuildComponent } from './resumebuild.component';

describe('ResumebuildComponent', () => {
  let component: ResumebuildComponent;
  let fixture: ComponentFixture<ResumebuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumebuildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumebuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
