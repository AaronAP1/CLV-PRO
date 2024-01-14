// login.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://clv-pytestado.onrender.com/consumo/api/clvdat/';

  constructor(private http: HttpClient) { }

  getCodeAndNumber(): Observable<{ codigoDePago: string, numero: string }> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(dataArray => {
        if (dataArray && dataArray.length > 0) {
          const firstItem = dataArray[0];
          return {
            codigoDePago: firstItem.CODIGO_DE_PAGO,
            numero: firstItem.NUMERO
          };
        } else {
          // Si la respuesta es vacía o no tiene el formato esperado, puedes retornar un valor por defecto o lanzar un error.
          throw new Error('La respuesta de la API no tiene el formato esperado.');
        }
      })
    );
  }

  login(dni: string, codigoPago: string): Observable<any> {
    // Aquí debes implementar la lógica de autenticación con tu servidor
    // Puedes realizar una solicitud HTTP para autenticar al usuario

    // Ejemplo básico:
    const loginData = {
      dni: dni,
      codigoPago: codigoPago
    };

    return this.http.post<any>('URL_DEL_SERVIDOR_DE_AUTENTICACION', loginData);
  }
}
