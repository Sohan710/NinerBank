import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        if (response && response.token) {
          // Assuming the response contains a token and a userId
          sessionStorage.setItem('token', response.token);
          sessionStorage.setItem('userId', response.userId); // Or whatever user identifier your API returns
          this.router.navigateByUrl('/myprofile');
        } else {
          this.errorMessage = "Login Failed. Please check your credentials.";
        }
      },
      (error) => {
        this.errorMessage = "An error occurred during login. Please try again.";
      }
    );
  }
}
