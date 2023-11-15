import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'http://localhost:3000/api/register'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  register(userData: any) {
    console.log('Sending registration data:', userData); // Log data being sent for registration
    return this.http.post(this.apiUrl, userData);
  }
}