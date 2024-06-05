import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'authToken';
  private usernameKey = 'username';

  // BehaviorSubject para el nombre de usuario
  public username = new BehaviorSubject<string | null>(null);

  constructor() {
    // Inicializar el nombre de usuario desde el localStorage si existe
    this.username.next(localStorage.getItem(this.usernameKey));
  }

  // Método para obtener el nombre de usuario como observable
  get username$() {
    return this.username.asObservable();
  }

  // Método para obtener el nombre de usuario actual
  getUsername(): string | null {
    return localStorage.getItem(this.usernameKey);
  }

  // Método para iniciar sesión
  login(token: string, username: string, codigopago: string) {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.usernameKey, username);
    localStorage.setItem('codigodepago', codigopago);
    this.username.next(username); // Emitir el nombre de usuario actualizado
  }

  // Método para cerrar sesión
  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.usernameKey);
    localStorage.removeItem('codigodepago');
    localStorage.removeItem('datosCliente');
    this.username.next(null); // Emitir null para indicar que no hay usuario autenticado
  }

  // Método para verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  // Método para establecer el token
  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  // Método para establecer la sesión (nombre de usuario y código de pago)
  setSession(token: string, username: string, codigopago: string) {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.usernameKey, username);
    localStorage.setItem('codigodepago', codigopago);
    this.username.next(username); // Emitir el nombre de usuario actualizado
  }
}
