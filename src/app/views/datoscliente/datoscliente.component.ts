import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';  
import { DatosClienteService } from 'src/app/api/datos_cliente.service';

@Component({
  selector: 'app-datoscliente',
  templateUrl: './datoscliente.component.html',
  styleUrls: ['./datoscliente.component.css']
})
export class DatosclienteComponent implements OnInit {
  datosCliente: any; 
  codigoPago: string = '';  

  constructor(private router: Router, private route: ActivatedRoute, private datosClienteService: DatosClienteService) { }

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      const state = navigation.extras.state as { codigoPago: string }; 
      this.codigoPago = state.codigoPago;
      console.log('Código de pago recibido:', this.codigoPago); 
      setTimeout(() => {
        this.obtenerDatosCliente(); 
      }, 2000); 
    } else {
      console.error('No se recibió el código de pago en la ruta.');
    }
  }
  
  

  obtenerDatosCliente(): void {
    this.datosClienteService.obtenerDatosCliente(this.codigoPago).subscribe({
      next: (response: any) => {
        console.log('Datos del cliente:', response);
        this.datosCliente = response; 
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
