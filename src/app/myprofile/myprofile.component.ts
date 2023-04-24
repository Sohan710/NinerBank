import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { User } from '../user.model';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { DataService, Data } from '../data.service';
import { ActivatedRoute } from '@angular/router';
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

