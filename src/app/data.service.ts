import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Data {
    _id? : string
    firstname : string;
    lastname : string;
    email : string;
    id : string;
    password : string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:9992/api/users';
  constructor(private http: HttpClient) {}

  getUserData(_id: string): Observable<Data> {
    return this.http.get<Data>(`${this.apiUrl}/${_id}`);
  }
}
