import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { ViewExpensesComponent } from './components/view-expenses/view-expenses.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-expense', component: AddExpenseComponent },
  { path: 'view-expenses', component: ViewExpensesComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
