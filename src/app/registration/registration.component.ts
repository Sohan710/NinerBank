// registration.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseError } from 'firebase/app';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  studentId: string = '';
  password: string = '';

  showAlert = false;
  alertColor: string = '';
  alertMessage: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async register() {
    this.showAlert = false;
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(
        this.email,
        this.password
      );
      const user = userCredential.user;
      if (user) {
        await this.firestore.collection('users').doc(user.uid).set({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          studentId: this.studentId,
        });
        this.setAlert('success', 'Student Registered Successfully');
        setTimeout(() => this.router.navigate(['/login']), 2000);
      } else {
        throw new Error('User creation failed');
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        this.setAlert('danger', 'Registration Failed: ' + error.message);
      } else {
        this.setAlert('danger', 'An unexpected error occurred. Please try again.');
      }
    }
  }

  setAlert(color: string, message: string) {
    this.alertColor = color;
    this.alertMessage = message;
    this.showAlert = true;
  }

  clearForm() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.studentId = '';
    this.password = '';
  }
}
