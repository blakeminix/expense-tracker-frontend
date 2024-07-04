import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from '@angular/fire/auth';
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
      // Handle errors
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

  getUser() {
    return this.auth.currentUser;
  }
}
