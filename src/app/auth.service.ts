import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  login(email: string, password: string): Observable<any> {
    return new Observable(observer => {
      this.afAuth.signInWithEmailAndPassword(email, password).then(
        userCredential => {
          if (userCredential.user) {
            // User is not null, proceed with login
            observer.next({ token: userCredential.user.refreshToken, userId: userCredential.user.uid });
            observer.complete();
          } else {
            // User is null, handle accordingly
            observer.error(new Error('User not found'));
          }
        },
        error => {
          // Failed login
          observer.error(error);
        }
      );
    });
  }

  setLoggedInUserId(_id: string, token: string) {
    sessionStorage.setItem('userId', _id); // Store the user ID in session storage
    sessionStorage.setItem('token', token); // Store the token in session storage
  }

  getLoggedInUserId(): string | null {
    return sessionStorage.getItem('userId');
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  logout() {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('token');
    // Additional cleanup actions can be added here if needed
  }
}
