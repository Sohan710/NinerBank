import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PythonScriptService {
  private apiUrl = 'http://localhost:5000/api/predict';

  constructor(private http: HttpClient) {}

  getPythonScriptOutput(data: { INTERESTSUBJECTS: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
  
}