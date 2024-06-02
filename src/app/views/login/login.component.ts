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
  codigopagoL: string = '';
  loginError: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit(): void {
    this.loginError = ''; // Limpiar el mensaje de error

    console.log('Datos enviados por el Login:', { email: this.email, password: this.password, codigopago: this.codigopagoL });

    if (this.email && this.password && this.codigopagoL) {
      this.loginService.login(this.email, this.password, this.codigopagoL).subscribe({
        next: (response: any) => {
          console.log('Respuesta del servidor:', response);
          const codigoPagoL = response?.codigo_pago;
          if (codigoPagoL) {
            console.log('Código de Pago obtenido:', codigoPagoL);
            localStorage.setItem('codigoPago', codigoPagoL); // Guardar en localStorage
            console.log('Enviando código de pago a la ruta datoscliente:', codigoPagoL);
            this.router.navigate(['/datoscliente'], { state: { codigoPagoL } });
          } else {
            console.error('No se recibió el código de pago en la respuesta del servidor.');
            this.loginError = 'Error al iniciar sesión. No se recibió el código de pago.';
          }
        },
        error: (error: any) => {
          console.error('Error en el login:', error);
          if (error.status === 403) {
            this.loginError = 'Acceso denegado. Verifica tus credenciales o permisos.';
          } else {
            this.loginError = 'Error al iniciar sesión. Verifica tus credenciales.';
          }
        }
      });
    } else {
      this.loginError = 'Por favor, ingresa tu email, contraseña y código de pago.';
    }
  }
}
