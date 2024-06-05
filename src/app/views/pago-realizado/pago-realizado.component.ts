import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagosRealizadosService } from 'src/app/api/pagos_realizados.service';

@Component({
  selector: 'app-pago-realizado',
  templateUrl: './pago-realizado.component.html',
  styleUrls: ['./pago-realizado.component.css']
})
export class PagoRealizadoComponent implements OnInit {
  cobros: any[] = [];
  paginaActual = 1;
  registrosPorPagina = 10;
  codigodepago: string = '';

  constructor(private router: Router, private cobrosService: PagosRealizadosService) { }

  ngOnInit(): void {
    this.codigodepago = localStorage.getItem('codigodepago') || '';
    console.log('Código de pago obtenido del localStorage:', this.codigodepago);

    if (this.codigodepago) {
      this.obtenerpagosrealizados(this.codigodepago);
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

  get totalPaginas(): number {
    return Math.ceil(this.cobros.length / this.registrosPorPagina);
  }

  get paginas(): number[] {
    const paginas: number[] = [];
    for (let i = 1; i <= this.totalPaginas; i++) {
      paginas.push(i);
    }
    return paginas;
  }

  get cobrosPaginados(): any[] {
    const inicio = (this.paginaActual - 1) * this.registrosPorPagina;
    const fin = inicio + this.registrosPorPagina;
    return this.cobros.slice(inicio, fin);
  }

  irPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaActual = pagina;
    }
  }

  onLogoutClick(): void {
    localStorage.removeItem('codigodepago');
    this.router.navigate(['/login']);
  }
}
