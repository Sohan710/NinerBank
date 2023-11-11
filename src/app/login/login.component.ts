import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Update the path accordingly

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {}

  login(form: NgForm) {
    if (form.valid) {
      this.authService.login(form.value).subscribe(
        response => {
          console.log('Login successful', response);
          this.router.navigate(['./myprofile']); // Redirect to myprofile page
        },
        error => {
          console.error('Error during login', error);
        }
      );
    }
  }
}
