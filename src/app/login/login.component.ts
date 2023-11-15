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

  errorMessage: string = ""; // Fixed the typo

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }

  login() {
    console.log(this.email);
    console.log(this.password);

    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        if (response.success) {
          this.authService.setLoggedInUserId(response.userId, response.token);
          this.router.navigateByUrl('/myprofile');
        } else {
          alert("Login Failed"); // Changed the message to 'Login Failed'
        }
      },
      (error) => {
        alert("Incorrect Email or Password");
        this.errorMessage = "Incorrect Email or Password";
      });
  }
}

