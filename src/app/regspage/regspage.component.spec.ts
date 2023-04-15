import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegspageComponent } from './regspage.component';

describe('RegspageComponent', () => {
  let component: RegspageComponent;
  let fixture: ComponentFixture<RegspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
