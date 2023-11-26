import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    authService = jasmine.createSpyObj('AuthService', ['login']);
    router = jasmine.createSpyObj('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should reset loginSuccess and errorMessage on login', () => {
    component.loginSuccess = true;
    component.errorMessage = 'Previous error message';

    // Simulate a successful login
    authService.login.and.returnValue(of({ token: 'token', userId: '123' }));

    component.login();

    expect(component.loginSuccess).toBe(false);
    expect(component.errorMessage).toBe('');

    // Simulate an error during login
    authService.login.and.returnValue(throwError('Test error'));

    component.login();

    expect(component.loginSuccess).toBe(false);
    expect(component.errorMessage).toBe('An error occurred during login. Please try again.');
  });
});
