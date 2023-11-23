import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

interface UserData {
  // Define the structure of your user data here
  firstName?: string;
  lastName?: string;
  email?: string;
  studentId?: string;
}

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  userData: UserData | null = null;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    const userId = this.authService.getLoggedInUserId();
    if (userId) {
      this.fetchUserData(userId);
    } else {
      // Redirect to login if no user ID is found
      this.router.navigate(['/login']);
    }
  }

  fetchUserData(userId: string) {
    this.dataService.getUserData(userId).subscribe(
      (data: UserData) => {
        this.userData = data;
      },
      (error: any) => {
        console.error('Error fetching user data:', error);
        // Handle the error
      }
    );
  }

  updateUserData(updatedData: UserData) {
    const userId = this.authService.getLoggedInUserId();
    if (userId) {
      this.dataService.updateUser(userId, updatedData).then(() => {
        // Handle successful update
      }).catch((error: any) => {
        console.error('Error updating user data:', error);
        // Handle the error
      });
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  goToPortfolio() {
    this.router.navigate(['/myportfolio']);
  }
}
