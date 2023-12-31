import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { catchError } from 'rxjs/operators'; // Add this import for error handling
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  loginSuccess: boolean = false; // Add this line

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.loginSuccess = false; // Reset on new login attempt
    this.errorMessage = ''; // Reset error message on new login attempt

    this.authService.login(this.email, this.password)
      .pipe(
        catchError(error => {
          this.errorMessage = "An error occurred during login. Please try again.";
          console.error(error);
          return throwError(error); // Rethrow the error
        })
      )
      .subscribe(
        response => {
          if (response && response.token) {
            sessionStorage.setItem('token', response.token);
            sessionStorage.setItem('userId', response.userId);
            this.loginSuccess = true; // Set success flag
            setTimeout(() => this.router.navigateByUrl('/myprofile'), 2000); // Redirect after 2 seconds
          }
        }
      );
  }

}
