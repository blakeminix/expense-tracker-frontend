import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, deleteUser, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth, private router: Router) {}

  async register(email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.log('Register error: ', error);
      if (error === 'auth/invalid-email') {

      } else {

      }
    }
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(this.auth, provider);
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error('Google login error: ', error);
    }
  }

  async login(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error('Login error: ', error);
      if (error === 'auth/invalid-email') {

      } else {
      }
    }
  }

  async logout() {
    await signOut(this.auth);
    this.router.navigate(['/login']);
  }

  async deleteAccount() {
    try {
      if (this.auth.currentUser) {
        await deleteUser(this.auth.currentUser);
      }
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Delete account error: ', error);
    }
  }

  getUser() {
    return this.auth.currentUser;
  }

  getCurrentUserEmail(): string | null {
    const user = this.auth.currentUser;
    return user ? user.email : null;
  }
}
