import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosClienteService } from 'src/app/api/datos_cliente.service';

@Component({
  selector: 'app-datoscliente',
  templateUrl: './datoscliente.component.html',
  styleUrls: ['./datoscliente.component.css']
})
export class DatosclienteComponent implements OnInit {
  datosCliente: any = {};
  codigodepago: string = '';

  constructor(private router: Router, private datosClienteService: DatosClienteService) { }

  ngOnInit(): void {
    this.codigodepago = localStorage.getItem('codigodepago') || '';
    if (this.codigodepago) {
      console.log('Código de pago obtenido del localStorage:', this.codigodepago);
      this.obtenerDatosCliente();
      console.error('Código de pago no obtenido del localStorage.');
    }
  }

  obtenerDatosCliente(): void {
    this.datosClienteService.obtenerDatosCliente(this.codigodepago).subscribe({
      next: (response: any[]) => {
        if (response && response.length > 0) {
          this.datosCliente = response[0];
          console.log('Datos del cliente:', this.datosCliente);

          // Guardar los datos del cliente en el localStorage
          localStorage.setItem('datosCliente', JSON.stringify(this.datosCliente));
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
