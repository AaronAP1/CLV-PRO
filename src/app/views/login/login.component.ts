import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/api/login.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private loginService: LoginService,
    private authService: AuthService
  ) {}

  login() {
    const credentials = {
      username: this.username,
      password: this.password
    };

    this.loginService.login(credentials).subscribe(
      response => {
        console.log('Login successful', response);
        this.authService.setSession(response.token, response.usuario, response.codigodepagoL);
        if (response.rol === 'USER') {
          this.router.navigate(['/principal']);
        } else if (response.rol === 'ADMIN') {
          this.router.navigate(['/principaladmin'])
        }
      },
      error => {
        console.error('Error en el login:', error);
      }
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  salir(){
    this.router.navigate(['/landing'])
  }
}
