import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyprofileComponent } from './myprofile.component';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

interface UserData {
  firstName?: string;
  lastName?: string;
  email?: string;
  studentId?: string;
}

describe('MyprofileComponent', () => {
  let component: MyprofileComponent;
  let fixture: ComponentFixture<MyprofileComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let dataService: jasmine.SpyObj<DataService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    authService = jasmine.createSpyObj('AuthService', ['getLoggedInUserId', 'logout']);
    dataService = jasmine.createSpyObj('DataService', ['getUserData', 'updateUser']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [MyprofileComponent],
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: DataService, useValue: dataService },
        { provide: Router, useValue: router },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MyprofileComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch user data on initialization', () => {
    authService.getLoggedInUserId.and.returnValue('user123');
    dataService.getUserData.and.returnValue(of({ firstName: 'John', lastName: 'Doe', email: 'john@example.com' }));
    component.ngOnInit();

    expect(authService.getLoggedInUserId).toHaveBeenCalled();
    expect(dataService.getUserData).toHaveBeenCalledWith('user123');
    expect(component.userData).toEqual({ firstName: 'John', lastName: 'Doe', email: 'john@example.com' });
  });

  it('should redirect to login if no user ID on initialization', () => {
    authService.getLoggedInUserId.and.returnValue(null);
    component.ngOnInit();

    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should fetch user data and update userData', () => {
    authService.getLoggedInUserId.and.returnValue('user123');
    dataService.getUserData.and.returnValue(of({ firstName: 'John', lastName: 'Doe', email: 'john@example.com' }));
    component.fetchUserData('user123');

    expect(dataService.getUserData).toHaveBeenCalledWith('user123');
    expect(component.userData).toEqual({ firstName: 'John', lastName: 'Doe', email: 'john@example.com' });
  });

  it('should update user data', async () => {
    authService.getLoggedInUserId.and.returnValue('user123');
    dataService.updateUser.and.returnValue(Promise.resolve());

    const updatedData: UserData = { firstName: 'Updated', lastName: 'User' };
    await component.updateUserData(updatedData);

  });

  it('should logout and navigate to login', () => {
    component.logout();

    expect(authService.logout).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should navigate to myportfolio', () => {
    component.goToPortfolio();

    expect(router.navigate).toHaveBeenCalledWith(['/myportfolio']);
  });
});
