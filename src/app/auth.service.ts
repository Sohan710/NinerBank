import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginData = {
      email: email,
      password: password,
    };
    return this.http.post<any>(`${this.apiUrl}/login`, loginData);
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
