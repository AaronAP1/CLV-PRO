import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.css']
})
export class Sidebar2Component implements OnInit {

  username: string | null = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // Obtener el nombre de usuario inicialmente
    this.username = this.authService.getUsername();

    // Suscribirse a cambios en el nombre de usuario
    this.authService.username.subscribe((username: string | null) => {
      this.username = username;
    });
  }

  // Método para redirigir a la página de datos del cliente
  onLoginClick(): void {
    this.router.navigate(['datoscliente']);
  }

  // Método para cerrar sesión
  onLoginClick2(): void {
    this.authService.logout();
    this.router.navigate(['/landing']);
  }

}
