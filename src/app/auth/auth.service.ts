import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(dni: string, codigoPago: string): void {
    // Lógica de autenticación aquí, puedes realizar una llamada a tu backend
    console.log(`DNI: ${dni}, Código de Pago: ${codigoPago}`);
    // Lógica adicional según tu implementación
  }
}
