import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://apiclvdjango.onrender.com/token/';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    
    // Configurar las cabeceras CORS
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', // Asegúrate de que el servidor permita este encabezado
        'Access-Control-Allow-Origin': 'http://localhost:4200' // Origen desde el que se permiten las solicitudes
      })
    };

    return this.http.post<any>(this.apiUrl, loginData, httpOptions);
  }
}
