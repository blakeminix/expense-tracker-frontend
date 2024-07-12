import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Expense {
  amount: number | string;
  note: string;
  category: string;
  date: string;
  userEmail: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private apiUrl = 'http://localhost:5000/api/expenses';
  private viewURL = 'http://localhost:5000/api/viewExpenses';

  constructor(private http: HttpClient) {}

  addExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.apiUrl, expense);
  }

  getUserExpenses(userEmail: string): Observable<any> {
    console.log(userEmail);
    return this.http.post<String>(this.viewURL, { userEmail });
  }
}
