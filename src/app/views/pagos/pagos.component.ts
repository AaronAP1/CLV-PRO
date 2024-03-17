import { Component, OnInit } from '@angular/core';
import { CobrosService } from 'src/app/api/cobros.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {
  datosCliente: any = {};
  cobros: any[] = [];

  constructor(private cobrosService: CobrosService) { }

  ngOnInit(): void {
    // Obtener el código de pago del localStorage
    const codigoPago = localStorage.getItem('codigoPago');
    if (codigoPago) {
      console.log('Código de pago obtenido del localStorage en PagosComponent:', codigoPago);
      
      // Llamar al servicio para obtener los cobros
      this.obtenerCobros(codigoPago);
    } else {
      console.error('Código de pago no encontrado en el localStorage en PagosComponent.');
    }

    // Obtener los datos del cliente del localStorage si es necesario
    const datosClienteString = localStorage.getItem('datosCliente');
    if (datosClienteString) {
      this.datosCliente = JSON.parse(datosClienteString);
      console.log('Datos del cliente obtenidos del localStorage en PagosComponent:', this.datosCliente);
    } else {
      console.error('Datos del cliente no encontrados en el localStorage en PagosComponent.');
    }
  }

  obtenerCobros(codigoPago: string): void {
    this.cobrosService.obtenercobros(codigoPago).subscribe({
      next: (response: any) => {
        this.cobros = response; 
        console.log('Cobros obtenidos:', this.cobros);
      },
      error: (error: any) => {
        console.error('Error al obtener los cobros:', error);
      }
    });
  }
}
