import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

interface UserData {
  // Define the structure of your user data here
  firstName?: string;
  lastName?: string;
  email?: string;
  studentId?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private firestore: AngularFirestore
  ) {}


  updateUser(userId: string, userData: any): Promise<void> {
    return this.firestore.collection('users').doc(userId).update(userData);
  }

  getUserData(userId: string): Observable<any> {
    return this.firestore.collection('users').doc(userId).valueChanges().pipe(
      tap((data: any) => console.log('Fetched user data:', data)), // Define the type if known, else use 'any'
      catchError((error: any) => {
        console.error('Error fetching user data:', error);
        return throwError(() => new Error('Error fetching user data'));
      })
    );
  }

  // If getUserExpenses is supposed to be a method, define it here
  getUserExpenses(userId: string): Observable<any> {
    // Replace 'expenses' with the actual collection name if different
    return this.firestore.collection('expenses', ref => ref.where('userId', '==', userId)).valueChanges().pipe(
      tap((expenses: any) => console.log('Fetched expenses:', expenses)), // Define the type if known, else use 'any'
      catchError((error: any) => {
        console.error('Error fetching expenses:', error);
        return throwError(() => new Error('Error fetching expenses'));
      })
    );
  }
}
