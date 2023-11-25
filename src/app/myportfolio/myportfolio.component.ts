import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

interface UserData {
  // Define the structure of your user data here
  firstName?: string;
  lastName?: string;
  email?: string;
  studentId?: string;
}

@Component({
  selector: 'app-myportfolio',
  templateUrl: './myportfolio.component.html',
  styleUrls: ['./myportfolio.component.css'],
})
export class MyportfolioComponent {
  expenseName: string = '';
  expenseAmount: number = 0;
  expenseDate: string = '';
  userData: UserData | null = null;
  showAlert = false;
  alertMessage: string = '';
  alertColor: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router,
    private dataService: DataService,
    private authService: AuthService,
  ) {}

  // New method to set an alert
  setAlert(message: string, color: string = 'success') {
    this.alertMessage = message;
    this.alertColor = color;
    this.showAlert = true;
  }

   // Modify this method to show success alert
   updateUserData(updatedData: UserData) {
    const userId = this.authService.getLoggedInUserId();
    if (userId) {
      this.dataService.updateUser(userId, updatedData).then(() => {
        this.setAlert('Expense added successfully');
        // Other actions after successful update
      }).catch((error: any) => {
        this.setAlert('Error updating user data', 'danger');
        console.error('Error updating user data:', error);
      });
    }
  }

  async submitExpense() {
    console.log('Attempting to submit expense');
    if (!this.expenseName || this.expenseAmount <= 0 || !this.expenseDate) {
      console.error('Please fill in all fields before submitting');
      alert('Please fill in all fields');
      return;
    }

    try {
      const user = await this.afAuth.currentUser;
      if (user) {
        console.log('Current user:', user);
        const expenseData = {
          name: this.expenseName,
          amount: this.expenseAmount,
          date: new Date(this.expenseDate).toISOString(), // Store date as ISO string
        };
        console.log('Adding expense:', expenseData);
        // Create a new expense document in the user's expenses subcollection
        await this.firestore
          .collection(`users/${user.uid}/expenses`)
          .add(expenseData);
        alert('Expense added successfully');
        this.clearForm();
      } else {
        console.log('No user is logged in');
        alert('No user is logged in.');
      }
    } catch (error) {
      console.error('Error adding expense:', error);
      alert('Failed to add expense. See console for details.');
    }
  }

  clearForm() {
    this.expenseName = '';
    this.expenseAmount = 0;
    this.expenseDate = '';
  }

  goToPortfolioPage() {
    this.router.navigate(['/portfolio']);
  }
}
