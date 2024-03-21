import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) { }

  onLoginClick(): void {
    this.router.navigate(['datoscliente']);
  }

  onLoginClick2(): void{
    localStorage.removeItem('datosCliente');
    localStorage.removeItem('codigoPago');
    this.router.navigate(['login']);
  }

}
