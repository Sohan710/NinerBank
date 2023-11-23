import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    }
  };
  public pieChartType: ChartType = 'pie';
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [
        "#ffcd56", "#ff6384", "#36a2eb", "#fd6b19",
        "#283747", "#7D3C98", "#FA0404", "#2ECC71",
        "#DFFF00", "#FF7F50"
      ],
    }]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public lineChartType: ChartType = 'line';
  public lineChartData: ChartData<'line', number[], string | string[]> = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      fill: true,
    }]
  };

  userExpenses: any[] = [];
  isLoading: boolean = true;

  constructor(private dataService: DataService, private authService: AuthService) {}

  ngOnInit() {
    this.fetchUserExpenses();
  }

  fetchUserExpenses() {
    const userId = this.authService.getLoggedInUserId();
    if (userId) {
      this.dataService.getUserExpenses(userId).subscribe(
        (expenses: any[]) => {
          this.isLoading = false;
          this.userExpenses = expenses.slice(-10); // Get last 10 expenses
          this.updateChartData();
        },
        (error: any) => {
          console.error('Error fetching expenses:', error);
          this.isLoading = false;
        }
      );
    } else {
      console.error('User is not logged in');
      this.isLoading = false;
    }
  }

  updateChartData() {
    this.pieChartData.labels = this.userExpenses.map(expense => expense.name);
    this.pieChartData.datasets[0].data = this.userExpenses.map(expense => expense.amount);

    this.lineChartData.labels = this.userExpenses.map(expense => expense.name);
    this.lineChartData.datasets[0].data = this.userExpenses.map(expense => expense.amount);
  }

  onDeleteExpense(expenseId: string) {
    const userId = this.authService.getLoggedInUserId();
    if (userId) {
      this.dataService.deleteExpense(userId, expenseId).then(() => {
        this.fetchUserExpenses();
      }).catch(error => {
        console.error('Error deleting expense:', error);
      });
    }
  }
}
