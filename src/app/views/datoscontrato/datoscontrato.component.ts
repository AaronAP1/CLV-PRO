import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datoscontrato',
  templateUrl: './datoscontrato.component.html',
  styleUrls: ['./datoscontrato.component.css']
})
export class DatoscontratoComponent implements OnInit {
  datosCliente: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Obtener los datos del cliente del localStorage
    const datosClienteString = localStorage.getItem('datosCliente');
    if (datosClienteString) {
      this.datosCliente = JSON.parse(datosClienteString);
      console.log('Datos del cliente obtenidos del localStorage:', this.datosCliente);
    } else {
      console.error('Datos del cliente no encontrados en el localStorage.');

    }
  }

  onLoginClick(): void {
    this.router.navigate(['pagos']);
  }
}
