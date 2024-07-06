import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
  }

  goToAddExpense() {
    this.router.navigate(['/add-expense']);
  }

  goToViewExpenses() {
    this.router.navigate(['/view-expenses']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
