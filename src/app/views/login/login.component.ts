// Importa el Router al comienzo del archivo
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/api/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dni: string = '';
  codigoPago: string = '';
  numero: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginService.getCodeAndNumber().subscribe({
      next: (data: { codigoDePago: string; numero: string; }) => {
        if (data) {
          this.codigoPago = data.codigoDePago;
          this.numero = data.numero;

          console.log('Datos de la API:', { codigoPago: this.codigoPago, numero: this.numero });
        }
      },
      error: (error) => {
        console.error('Error al obtener datos de la API', error);
      }
    });
  }

  onLoginClick(): void {
    if (this.dni && this.codigoPago) {
      this.loginService.login(this.dni, this.codigoPago).subscribe(
        (response) => {
          console.log('Login exitoso', response);
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Error en el inicio de sesión', error);
        }
      );
    }
  }
}
