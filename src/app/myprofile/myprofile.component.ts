import { Component, OnInit } from '@angular/core';
import { DataService, Data } from '../data.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; // Corrected import

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  userData: Data | null = null;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private router: Router // Injected the Router
  ) {}

  ngOnInit() {
    const userId = this.authService.getLoggedInUserId();
    if (userId) {
      this.fetchUserData(userId);
    }
  }

  fetchUserData(userId: string) {
    this.dataService.getUserData(userId).subscribe(
      (data) => {
        console.log('Received data:', data);
        this.userData = data;
      },
      (error) => {
        console.error('Error fetching user data:', error);
        // Handle error accordingly
      }
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirect to login after logout
  }

  goToPortfolio() {
    this.router.navigate(['/myportfolio']); // Use the correct path for your portfolio page
  }
}

