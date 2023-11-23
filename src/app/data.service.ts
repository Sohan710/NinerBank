import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

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

  getUserExpenses(userId: string): Observable<any[]> {
    return this.firestore.collection(`users/${userId}/expenses`).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any; // Cast to 'any' or create an interface for the expense data
        const id = a.payload.doc.id;
        // Check if 'data.date' is a Timestamp and has a 'toDate' method
        if (data.date && typeof data.date.toDate === 'function') {
          data.date = data.date.toDate(); // Convert Timestamp to Date object
        } else if (data.date) {
          // If 'data.date' is a string, create a new Date object
          data.date = new Date(data.date);
        }
        return { id, ...data }; // Combine the id and data into one object
      })),
      catchError((error: any) => {
        console.error('Error fetching expenses:', error);
        return throwError(() => new Error('Error fetching expenses'));
      })
    );
  }

  deleteExpense(userId: string, expenseId: string): Promise<void> {
    return this.firestore.collection(`users/${userId}/expenses`).doc(expenseId).delete();
  }
}
