import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyportfolioComponent } from './myportfolio.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { of } from 'rxjs';

describe('MyportfolioComponent', () => {
  let component: MyportfolioComponent;
  let fixture: ComponentFixture<MyportfolioComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let dataService: jasmine.SpyObj<DataService>;
  let router: jasmine.SpyObj<Router>;
  let afAuth: jasmine.SpyObj<AngularFireAuth>;
  let firestore: jasmine.SpyObj<AngularFirestore>;

  beforeEach(async () => {
    authService = jasmine.createSpyObj('AuthService', ['getLoggedInUserId', 'logout']);
    dataService = jasmine.createSpyObj('DataService', ['updateUser']);
    router = jasmine.createSpyObj('Router', ['navigate']);
    afAuth = jasmine.createSpyObj('AngularFireAuth', [], { currentUser: Promise.resolve({ uid: 'user123' }) });
    firestore = jasmine.createSpyObj('AngularFirestore', ['collection']);

    TestBed.configureTestingModule({
      declarations: [MyportfolioComponent],
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: DataService, useValue: dataService },
        { provide: Router, useValue: router },
        { provide: AngularFireAuth, useValue: afAuth },
        { provide: AngularFirestore, useValue: firestore as any }, // Use 'as any' to bypass type check
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MyportfolioComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.expenseName).toBe('');
    expect(component.expenseAmount).toBe(0);
    expect(component.expenseDate).toBe('');
    expect(component.userData).toBeNull();
    expect(component.showAlert).toBeFalsy();
    expect(component.alertMessage).toBe('');
    expect(component.alertColor).toBe('');
  });

  it('should set an alert message', () => {
    component.setAlert('Test message', 'info');
    expect(component.alertMessage).toBe('Test message');
    expect(component.alertColor).toBe('info');
    expect(component.showAlert).toBeTruthy();
  });

  it('should clear the form', () => {
    component.expenseName = 'Test Name';
    component.expenseAmount = 100;
    component.expenseDate = '2023-01-01';
    component.clearForm();
    expect(component.expenseName).toBe('');
    expect(component.expenseAmount).toBe(0);
    expect(component.expenseDate).toBe('');
  });

  it('should navigate to portfolio page', () => {
    component.goToPortfolioPage();
    expect(router.navigate).toHaveBeenCalledWith(['/portfolio']);
  });

});
