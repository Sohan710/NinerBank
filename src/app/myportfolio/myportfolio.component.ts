import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myportfolio',
  templateUrl: './myportfolio.component.html',
  styleUrls: ['./myportfolio.component.css'],
})
export class MyportfolioComponent {
  expenseName: string = '';
  expenseAmount: number = 0;
  expenseDate: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

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
