import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CobrosAdminService } from 'src/app/api/cobrosadmin.service';

import * as bootstrap from 'bootstrap';
import Swal from 'sweetalert2';

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
  nuevoCobro: any = {};
  filtro: string = '';

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

  get cobrosFiltrados(): any[] {
    return this.cobrosadmin.filter(cobro =>
      cobro.codigopago && cobro.codigopago.toString().toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  get cobrosPaginadosFiltrados(): any[] {
    const inicio = (this.paginaActual - 1) * this.registrosPorPagina;
    const fin = inicio + this.registrosPorPagina;
    return this.cobrosFiltrados.slice(inicio, fin);
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

  openCrearModal(): void {
    this.nuevoCobro = {};
    const modalElement = document.getElementById('crearModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  eliminarCobro(cobro: any): void {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, bórralo!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.cobrosadminservice.eliminarCobro(cobro.idcobros).subscribe(() => {
          this.cobrosadmin = this.cobrosadmin.filter(item => item.idcobros !== cobro.idcobros);
          Swal.fire({
            title: "¡Eliminado!",
            text: "Tu registro ha sido eliminado.",
            icon: "success"
          });
        }, error => {
          Swal.fire({
            title: "Error",
            text: "Hubo un error al eliminar el registro.",
            icon: "error"
          });
        });
      }
    });
  }

  crearCobro(): void {
    this.cobrosadminservice.crearCobro(this.nuevoCobro).subscribe((nuevoCobro) => {
      this.cobrosadmin.push(nuevoCobro);
      Swal.fire({
        title: "¡Creado!",
        text: "El nuevo cobro ha sido creado con éxito.",
        icon: "success"
      });
      const modalElement = document.getElementById('crearModal');
      if (modalElement) {
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
          modal.hide();
        }
      }
    }, error => {
      Swal.fire({
        title: "Error",
        text: "Hubo un error al crear el cobro.",
        icon: "error"
      });
    });
  }
}
