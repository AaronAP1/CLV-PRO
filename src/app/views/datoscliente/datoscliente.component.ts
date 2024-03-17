import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosClienteService } from 'src/app/api/datos_cliente.service';

@Component({
  selector: 'app-datoscliente',
  templateUrl: './datoscliente.component.html',
  styleUrls: ['./datoscliente.component.css']
})
export class DatosclienteComponent implements OnInit {
  datosCliente: any = {}; // Inicializar como objeto vacío
  codigoPago: string = '';  

  constructor(private router: Router, private datosClienteService: DatosClienteService) { }

  ngOnInit(): void {
    const navigation = window.history.state;
    if (navigation && navigation.codigoPago) {
      this.codigoPago = navigation.codigoPago;
      console.log('Código de pago recibido:', this.codigoPago); 
      this.obtenerDatosCliente(); // Llama directamente al método sin setTimeout
    } else {
      console.error('No se recibió el código de pago en la ruta.');
    }
  }

  obtenerDatosCliente(): void {
    this.datosClienteService.obtenerDatosCliente(this.codigoPago).subscribe({
      next: (response: any[]) => {
        if (response && response.length > 0) {
          this.datosCliente = response[0]; // Seleccionar el primer objeto del array
          console.log('Datos del cliente:', this.datosCliente);
        } else {
          console.error('No se encontraron datos del cliente.');
        }
      },
      error: (error: any) => {
        console.error('Error al obtener datos del cliente:', error);
      }
    });
  }

  onLoginClick(): void {
    this.router.navigate(['pagos']);
  }
}
