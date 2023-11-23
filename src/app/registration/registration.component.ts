import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseError } from 'firebase/app';

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

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async register() {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
      const user = userCredential.user;
      if (user) {
        await this.firestore.collection('users').doc(user.uid).set({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          studentId: this.studentId,
          // Add other user-specific fields as needed
        });
        alert("Student Registered Successfully");
        this.router.navigate(['/login']);
      } else {
        throw new Error('User creation failed');
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        // Now 'error' is typed as FirebaseError
        console.error('Registration error:', error.message);
        alert("Registration Failed: " + error.message);
      } else {
        // Handle other types of errors
        console.error('An unexpected error occurred:', error);
        alert("An unexpected error occurred. Please try again.");
      }
    }
  }
}
