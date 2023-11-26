// registration.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationComponent } from './registration.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environment/environment';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule,
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial form values empty', () => {
    expect(component.firstName).toBe('');
    expect(component.lastName).toBe('');
    expect(component.email).toBe('');
    expect(component.studentId).toBe('');
    expect(component.password).toBe('');
  });

  it('should have showAlert initially set to false', () => {
    expect(component.showAlert).toBe(false);
  });

  it('should set alert properties correctly', () => {
    component.setAlert('success', 'Test Message');
    expect(component.alertColor).toBe('success');
    expect(component.alertMessage).toBe('Test Message');
    expect(component.showAlert).toBe(true);
  });

  it('should reset form fields on clearForm()', () => {
    component.firstName = 'John';
    component.lastName = 'Doe';
    component.email = 'john@example.com';
    component.studentId = '12345';
    component.password = 'password';

    component.clearForm();

    expect(component.firstName).toBe('');
    expect(component.lastName).toBe('');
    expect(component.email).toBe('');
    expect(component.studentId).toBe('');
    expect(component.password).toBe('');
  });
});
