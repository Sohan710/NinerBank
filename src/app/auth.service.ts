import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';
  private userId: string | null = null;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginData = {
      email: email,
      password: password,
    };
    return this.http.post<any>(`${this.apiUrl}/login`, loginData);
  }

  setLoggedInUserId(_id: string, token: string) {
    console.log('Setting user ID:', _id);
    this.userId = _id;
    localStorage.setItem('token', token); // Store the token
  }

  getLoggedInUserId(): string | null {
    return this.userId;
  }
}
