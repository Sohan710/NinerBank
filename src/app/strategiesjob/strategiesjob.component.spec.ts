import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategiesjobComponent } from './strategiesjob.component';

describe('StrategiesjobComponent', () => {
  let component: StrategiesjobComponent;
  let fixture: ComponentFixture<StrategiesjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategiesjobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategiesjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
