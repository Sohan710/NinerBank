import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistrationService } from '../registration.service'; // Ensure this path is correct

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private registrationService: RegistrationService) {
    this.registrationForm = this.fb.group({
      firstName: [''], // Added default values as empty strings
      lastName: [''],
      email: [''],
      studentId: [''], // Make sure the type matches with your backend (number or string)
      password: ['']
    });
  }

  register() {
    this.registrationService.register(this.registrationForm.value).subscribe(
      response => {
        console.log('Registration successful', response);
      },
      error => {
        console.error('Error during registration', error);
      }
    );
  }
}
