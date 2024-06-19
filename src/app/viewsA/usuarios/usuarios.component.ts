import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CobrosService } from 'src/app/api/cobros.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  cobros: any[] = [];
  paginaActual = 1;
  registrosPorPagina = 10;
  codigodepago: string = '';

  constructor(private router: Router, private cobrosService: CobrosService) { }

  ngOnInit(): void {
    this.codigodepago = localStorage.getItem('codigodepago') || '';
    console.log('Código de pago obtenido del localStorage:', this.codigodepago);

    if (this.codigodepago) {
      this.obtenerCobros(this.codigodepago);
    } else {
      console.error('Código de pago no obtenido del localStorage.');
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
    this.router.navigate(['login']);
  }

}
