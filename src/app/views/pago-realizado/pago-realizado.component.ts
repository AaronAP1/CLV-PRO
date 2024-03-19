import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagosRealizadosService } from 'src/app/api/pagos_realizados.service';

@Component({
  selector: 'app-pago-realizado',
  templateUrl: './pago-realizado.component.html',
  styleUrls: ['./pago-realizado.component.css']
})
export class PagoRealizadoComponent implements OnInit {

  pagosRealizados: any = {};
  cobros: any[] = [];
  codigoPago: string = '';  

  constructor(private router: Router, private cobrosService: PagosRealizadosService) { }

  ngOnInit(): void {
    this.codigoPago = localStorage.getItem('codigoPago') || '';
    console.log('Código de pago obtenido del localStorage:', this.codigoPago);

    if (this.codigoPago) {
      this.obtenerpagosrealizados(this.codigoPago); 
    } else {
      console.error('Código de pago no obtenido del localStorage.');
    }
  }

  obtenerpagosrealizados(codigoPago: string): void {
    this.cobrosService.obtenerpagosrealizados(codigoPago).subscribe({
      next: (response: any) => {
        this.cobros = response; 
        console.log('Cobros obtenidos:', this.cobros);
      },
      error: (error: any) => {
        console.error('Error al obtener los cobros:', error);
      }
    });
  }

  onLogoutClick(): void {
    localStorage.removeItem('codigoPago');
    this.router.navigate(['login']); 
  }



}
