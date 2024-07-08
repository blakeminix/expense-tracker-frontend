import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss'
})
export class AddExpenseComponent {
  amount: number | string = 0;
  note: string = '';
  category: string = '';
  date: string = '';
  userEmail: string;

  constructor(private authService: AuthService, private router: Router, private expenseService: ExpenseService) {
    this.userEmail = this.authService.getCurrentUserEmail() || '';
  }

  addExpense() {
    const expense = {
      amount: this.amount,
      note: this.note,
      category: this.category,
      date: this.date,
      userEmail: this.userEmail,
    };

    this.expenseService.addExpense(expense).subscribe(
      response => {
        console.log('Expense added:', response);
        this.amount = 0;
        this.note = '';
        this.category = '';
        this.date = '';
      },
      error => {
        console.error('Error adding expense:', error);
      }
    );
  }

  logout() {
    this.authService.logout();
  }

  clearAmount() {
    if (this.amount === 0) {
      this.amount = '';
    }
  }

  resetAmount() {
    if (this.amount === '') {
      this.amount = 0;
    }
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
