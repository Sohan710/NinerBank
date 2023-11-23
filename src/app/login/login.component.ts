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

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        if (response && response.token) {
          // Assuming the response contains a token and a userId
          sessionStorage.setItem('token', response.token);
          sessionStorage.setItem('userId', response.userId);
          this.router.navigateByUrl('/myprofile');
        }
      },
      error => {
        this.errorMessage = "An error occurred during login. Please try again.";
        console.error(error);
      }
    );
  }
}
