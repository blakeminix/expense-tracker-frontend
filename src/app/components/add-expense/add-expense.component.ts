import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss'
})
export class AddExpenseComponent {
  amount: number = 0;
  note: string = '';
  category: string = '';
  date: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  addExpense() {
    console.log('Expense added:', this.amount, this.note, this.category, this.date);
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
