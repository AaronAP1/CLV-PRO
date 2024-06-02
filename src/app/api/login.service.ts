import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8090/auth/loging'; //

  constructor(private http: HttpClient) { }

  login(email: string, password: string, codigopagoL: string): Observable<any> {
    const loginData = { email, password, codigopagoL };

    return this.http.post<any>(this.apiUrl, loginData);
  }
}
