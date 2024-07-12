import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ExpenseService } from '../../services/expense.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-expenses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-expenses.component.html',
  styleUrls: ['./view-expenses.component.scss']
})
export class ViewExpensesComponent implements OnInit {
  expenses: any[] = [];
  userEmail: string;

  constructor(private authService: AuthService, private router: Router, private expenseService: ExpenseService) {
    this.userEmail = this.authService.getCurrentUserEmail() || '';
  }

  ngOnInit() {
    this.loadExpenses();
  }

  loadExpenses() {
    this.expenseService.getUserExpenses(this.userEmail).subscribe(
      (data) => {
        this.expenses = data;
      },
      (error) => {
        console.error('Failed to load expenses', error);
      }
    );
  }

  logout() {
    this.authService.logout();
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}