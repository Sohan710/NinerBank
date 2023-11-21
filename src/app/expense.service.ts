import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExpenseService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  addExpense(userId: string, expenseData: { title: string; amount: number }): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(`${this.apiUrl}/user/${userId}/expenses`, expenseData, { headers });
  }

  getExpenses(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.apiUrl}/expenses`, { headers });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getUserToken()}`
    });
  }

  private getUserToken(): string | null {
    return localStorage.getItem('token');
  }   
}
