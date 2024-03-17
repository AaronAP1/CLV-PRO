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

  constructor(private loginService: LoginService, private router: Router) {}

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
          const codigoPago = response?.codigo_pago; 
          if (codigoPago) {
            console.log('Código de Pago obtenido:', codigoPago);
            console.log('Enviando código de pago a la ruta datoscliente:', codigoPago);
            this.router.navigate(['/datoscliente'], { state: { codigoPago } });
          } else {
            console.error('No se recibió el código de pago en la respuesta del servidor.');
            this.loginError = 'Error al iniciar sesión. No se recibió el código de pago.';
          }
        },
        error: (error: any) => {
          console.error('Error en el login:', error);
          this.loginError = 'Error al iniciar sesión. Verifica tus credenciales.';
        }
      });
    } else {
      this.loginError = 'Por favor, ingresa tu email y contraseña.';
    }
  }
}
