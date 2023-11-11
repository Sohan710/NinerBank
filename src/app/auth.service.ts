import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:3000/api/login'; // Update with your server URL

  constructor(private http: HttpClient) {}

  login(userData: any) {
    return this.http.post(this.loginUrl, userData);
  }
}
