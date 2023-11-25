import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseError } from 'firebase/app';
import { AnimationOptions } from 'ngx-lottie';

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

  // Alert properties
  showAlert = false;
  alertColor: string = '';
  alertMessage: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit(): void {}

  lottieConfig: AnimationOptions = {
    path: '../../assets/Animation - 1700761188855.json', // Update with the path to your Lottie file
  };

  animationCreated(animation: any): void {
    console.log('Animation created:', animation);
  }

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
        setTimeout(() => this.router.navigate(['/login']), 2000); // Redirect after 2 seconds
      } else {
        throw new Error('User creation failed');
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        this.setAlert('danger', 'Registration Failed: ' + error.message);
      } else if (error instanceof Error) {
        this.setAlert('danger', 'An unexpected error occurred: ' + error.message);
      } else {
        this.setAlert('danger', 'An unexpected error occurred. Please try again.');
      }
    }
  }

  private setAlert(color: string, message: string) {
    this.alertColor = color;
    this.alertMessage = message;
    this.showAlert = true;
  }
}
