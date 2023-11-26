import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortfolioComponent } from './portfolio.component';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let dataService: jasmine.SpyObj<DataService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    authService = jasmine.createSpyObj('AuthService', ['getLoggedInUserId']);
    dataService = jasmine.createSpyObj('DataService', ['getUserExpenses', 'deleteExpense']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [PortfolioComponent],
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: DataService, useValue: dataService },
        { provide: Router, useValue: router },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.userExpenses).toEqual([]);
    expect(component.isLoading).toBeTruthy();
  });

  it('should fetch user expenses', () => {
    const userId = 'user123';
    authService.getLoggedInUserId.and.returnValue(userId);
    const expenses = [{ name: 'Expense 1', amount: 100 }, { name: 'Expense 2', amount: 200 }];
    dataService.getUserExpenses.and.returnValue(of(expenses));

    component.ngOnInit();

    expect(authService.getLoggedInUserId).toHaveBeenCalled();
    expect(dataService.getUserExpenses).toHaveBeenCalledWith(userId);
    expect(component.isLoading).toBeFalsy();
    expect(component.userExpenses).toEqual(expenses.slice(-10));
  });

  it('should handle error when fetching user expenses', () => {
    const userId = 'user123';
    authService.getLoggedInUserId.and.returnValue(userId);
    const errorMessage = 'Error fetching expenses';
    dataService.getUserExpenses.and.returnValue(throwError(errorMessage));

    component.ngOnInit();

    expect(authService.getLoggedInUserId).toHaveBeenCalled();
    expect(dataService.getUserExpenses).toHaveBeenCalledWith(userId);
    expect(component.isLoading).toBeFalsy();
    expect(component.userExpenses).toEqual([]);
  });

  it('should delete an expense', () => {
    const userId = 'user123';
    authService.getLoggedInUserId.and.returnValue(userId);
    const expenseId = 'expense123';
    dataService.deleteExpense.and.returnValue(Promise.resolve());

    component.onDeleteExpense(expenseId);

    expect(authService.getLoggedInUserId).toHaveBeenCalled();
    expect(dataService.deleteExpense).toHaveBeenCalledWith(userId, expenseId);
  });

  it('should navigate to my portfolio page', () => {
    component.goToMyPortfolioPage();
    expect(router.navigate).toHaveBeenCalledWith(['/myportfolio']);
  });

  it('should navigate to my profile page', () => {
    component.goToMyProfilePage();
    expect(router.navigate).toHaveBeenCalledWith(['/myprofile']);
  });
});
