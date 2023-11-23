import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // Adjust the import path as needed
import { AuthService } from '../auth.service'; // Adjust the import path as needed

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  userExpenses: any[] = []; // Define the type if known, else use 'any'
  isLoading: boolean = true; // Declare the isLoading property

  constructor(
    private dataService: DataService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.fetchUserExpenses();
  }

  fetchUserExpenses() {
    const userId = this.authService.getLoggedInUserId();
    if (userId) {
      this.dataService.getUserExpenses(userId).subscribe(
        (expenses: any) => { // Define the type if known, else use 'any'
          this.userExpenses = expenses;
          this.isLoading = false; // Set isLoading to false after fetching data
        },
        (error: any) => { // Define the type if known, else use 'any'
          console.error('Error fetching expenses:', error);
          this.isLoading = false; // Set isLoading to false if an error occurs
        }
      );
    } else {
      console.error('User is not logged in');
      this.isLoading = false; // Set isLoading to false if user is not logged in
      // Handle the user not being logged in
    }
  }
}
