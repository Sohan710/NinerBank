import { Component, OnInit } from '@angular/core';
import { DataService, Data } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  userData: Data | null = null;

  constructor(private dataService: DataService, private authService: AuthService) {}

  ngOnInit() {
    const userId = this.authService.getLoggedInUserId();
    if (userId) {
      this.fetchUserData(userId);
    }
  }

  fetchUserData(userId: string) {
    this.dataService.getUserData(userId).subscribe((data) => {
      console.log('Received data:', data);
      this.userData = data;
    });
  }
}
