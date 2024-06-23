import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CobrosAdminService } from 'src/app/api/cobrosadmin.service';

import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-cobrosadmin',
  templateUrl: './cobrosadmin.component.html',
  styleUrls: ['./cobrosadmin.component.css']
})
export class CobrosadminComponent implements OnInit {
  cobrosadmin: any[] = [];
  paginaActual = 1;
  registrosPorPagina = 10;
  cobroSeleccionado: any;

  constructor(private router: Router, private cobrosadminservice: CobrosAdminService) { }

  ngOnInit(): void {
    this.cobrosadminservice.getClientes().subscribe(data => {
      this.cobrosadmin = data;
    });
  }

  get totalPaginas(): number {
    return Math.ceil(this.cobrosadmin.length / this.registrosPorPagina);
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
    return this.cobrosadmin.slice(inicio, fin);
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

  openDetalles(cobro: any): void {
    this.cobroSeleccionado = cobro;
    const modalElement = document.getElementById('detallesModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  eliminarCobro(cobro: any): void {
    if (confirm(`¿Estás seguro de que deseas eliminar el cobro con código ${cobro.codigopago}?`)) {
      this.cobrosadminservice.eliminarCobro(cobro.idcobros).subscribe(() => {
        // Eliminar el cobro del array y actualizar la tabla
        this.cobrosadmin = this.cobrosadmin.filter(item => item.idcobros !== cobro.idcobros);
        alert('Cobro eliminado con éxito');
      }, error => {
        alert('Error al eliminar el cobro');
      });
    }
  }
}

