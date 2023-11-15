import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  studentId: string = "";
  password: string = "";

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
  }

  register() {
    let bodyData = {
      "firstName": this.firstName,
      "lastName": this.lastName,
      "email": this.email,
      "studentId": this.studentId,
      "password": this.password,
    };
    this.http.post("http://localhost:3000/api/register", bodyData).subscribe((resultData: any) => {
        console.log(resultData);
        alert("Student Registered Successfully");
        this.router.navigate(['/login']); // Redirect to login page
      },
      (error) => {
        console.error('Registration error:', error);
        // Handle registration error
        alert("Registration Failed: " + error.message);
      }
    );
  }

  save() {
    this.register();
  }
}

