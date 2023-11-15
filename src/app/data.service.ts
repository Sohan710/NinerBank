import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Data { // Define the Data interface
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  studentId: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getUserData(_id: string): Observable<Data> {
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return this.http.get<Data>(`${this.apiUrl}/user/${_id}`, { headers });
  }
}