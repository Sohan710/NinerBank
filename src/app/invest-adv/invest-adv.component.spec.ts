import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestAdvComponent } from './invest-adv.component';

describe('InvestAdvComponent', () => {
  let component: InvestAdvComponent;
  let fixture: ComponentFixture<InvestAdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestAdvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
