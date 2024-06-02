import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://clvproject-production.up.railway.app/auth/loging'; //

  constructor(private http: HttpClient) { }

  login(email: string, password: string, codigopagoL: string): Observable<any> {
    const loginData = { email, password, codigopagoL };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Opcional: Aquí puedes incluir tu token de autorización si es necesario
      // 'Authorization': `Bearer ${yourJWTToken}`
    });

    return this.http.post<any>(this.apiUrl, loginData, { headers });
  }
}
