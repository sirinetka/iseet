import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginStatus = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.loginStatus.asObservable();

  private hasToken(): boolean {
    return !!localStorage.getItem('role');
  }

  login(role: string) {
    localStorage.setItem('role', role);
    this.loginStatus.next(true);
  }

  logout() {
    localStorage.clear()
    localStorage.removeItem('role');
    this.loginStatus.next(false);
  window.location.href="/login"
  }
}
