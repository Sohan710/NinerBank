import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };
  public pieChartType: ChartType = 'pie';
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#ffcd56',
          '#ff6384',
          '#36a2eb',
          '#fd6b19',
          '#283747',
          '#7D3C98',
          '#FA0404',
          '#2ECC71',
          '#DFFF00',
          '#FF7F50',
        ],
      },
    ],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public lineChartType: ChartType = 'line';
  public lineChartData: ChartData<'line', number[], string | string[]> = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        fill: true,
      },
    ],
  };
  // Bar Chart Configuration
  public barChartOptions: ChartConfiguration['options'] = {
    /* Define options */
  };
  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar', number[], string | string[]> = {
    labels: [], // Initially empty
    datasets: [
      {
        data: [], // Initially empty
        backgroundColor: 'rgba(0, 123, 255, 0.5)', // Example color
      },
    ],
  };

  // Radar Chart Configuration
  public radarChartOptions: ChartConfiguration['options'] = {
    /* Define options */
  };
  public radarChartType: ChartType = 'radar';
  public radarChartData: ChartData<'radar', number[], string | string[]> = {
    labels: [], // Initially empty
    datasets: [
      {
        data: [], // Initially empty
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Example color
        borderColor: 'rgba(255, 99, 132, 1)', // Example border color
      },
    ],
  };

  userExpenses: any[] = [];
  isLoading: boolean = true;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private router: Router
  ) {}

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
    // Update Pie and Line Chart Data
    this.pieChartData.labels = this.userExpenses.map((expense) => expense.name);
    this.pieChartData.datasets[0].data = this.userExpenses.map(
      (expense) => expense.amount
    );
    this.lineChartData.labels = this.userExpenses.map(
      (expense) => expense.name
    );
    this.lineChartData.datasets[0].data = this.userExpenses.map(
      (expense) => expense.amount
    );

    // Update Bar and Radar Chart Data
    this.barChartData.labels = this.userExpenses.map((expense) => expense.name);
    this.barChartData.datasets[0].data = this.userExpenses.map(
      (expense) => expense.amount
    );
    this.radarChartData.labels = this.userExpenses.map(
      (expense) => expense.name
    );
    this.radarChartData.datasets[0].data = this.userExpenses.map(
      (expense) => expense.amount
    );
  }

  onDeleteExpense(expenseId: string) {
    const userId = this.authService.getLoggedInUserId();
    if (userId) {
      this.dataService
        .deleteExpense(userId, expenseId)
        .then(() => {
          this.fetchUserExpenses();
        })
        .catch((error) => {
          console.error('Error deleting expense:', error);
        });
    }
  }

  goToMyPortfolioPage() {
    this.router.navigate(['/myportfolio']);
  }

  goToMyProfilePage() {
    this.router.navigate(['/myprofile']);
  }
}
