import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'https://clvproject-production.up.railway.app/auth/loging';

  constructor(private http: HttpClient, private authService: AuthService) { }

  login(credentials: {username: string, password: string}): Observable<any> {
    return this.http.post<any>(this.loginUrl, credentials).pipe(
      tap(response => {
        if (response.token) {
          this.authService.setToken(response.token);
        }
      })
    );
  }
}

