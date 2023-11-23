import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // Adjust the import path as needed
import { AuthService } from '../auth.service'; // Adjust the import path as needed

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  userExpenses: any[] = [];
  isLoading: boolean = true;

  constructor(private dataService: DataService, private authService: AuthService) {}

  ngOnInit() {
    this.fetchUserExpenses();
  }

  fetchUserExpenses() {
    const userId = this.authService.getLoggedInUserId();
    if (userId) {
      this.dataService.getUserExpenses(userId).subscribe(
        (expenses: any[]) => {
          this.userExpenses = expenses;
          this.isLoading = false;
        },
        (error: any) => {
          console.error('Error fetching expenses:', error);
          this.isLoading = false;
        }
      );
    } else {
      console.error('User is not logged in');
      this.isLoading = false;
      // Redirect to login or handle accordingly
    }
  }
}
