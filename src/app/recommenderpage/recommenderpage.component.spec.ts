import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommenderpageComponent } from './recommenderpage.component';

describe('RecommenderpageComponent', () => {
  let component: RecommenderpageComponent;
  let fixture: ComponentFixture<RecommenderpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommenderpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommenderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
