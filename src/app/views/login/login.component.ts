import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/api/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  onLoginClick(): void {
    console.log('Botón de login clickeado');
    this.onSubmit();
  }

  onSubmit(): void {
    this.loginError = '';

    console.log('Datos enviados por el Login:', { email: this.email, password: this.password });

    if (this.email && this.password) {
      this.loginService.login(this.email, this.password).subscribe({
        next: response => {
          console.log('Respuesta del servidor:', response);
          this.router.navigate(['/datoscliente']);
        },
        error: (error: any) => {
          console.error('Error en el login:', error);
          this.loginError = 'Error al iniciar sesión. Verifica tus credenciales.';
          // this.router.navigate(['/datoscliente']);
        }
      });
    } else {
      this.loginError = 'Por favor, ingresa tu email y contraseña.';
    }
  }
}
