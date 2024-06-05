import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'authToken';

  constructor() { }

  setSession(token: string, username: string, codigopagoL: string) {
    localStorage.setItem('authToken', token);
    localStorage.setItem('username', username);
    localStorage.setItem('codigodepago', codigopagoL);
  }

  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
  }
}
