import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as bootstrap from 'bootstrap';
import Swal from 'sweetalert2';

import { RecaudacionesAdminService } from 'src/app/api/recaudacionesadmin.service';

@Component({
  selector: 'app-recaudacionesadmin',
  templateUrl: './recaudacionesadmin.component.html',
  styleUrls: ['./recaudacionesadmin.component.css']
})
export class RecaudacionesadminComponent implements OnInit {
  recaudacionesadmin: any[] = [];
  paginaActual = 1;
  registrosPorPagina = 10;
  RecaudacionesSeleccionado: any;
  nuevoRecaudacion: any = {};
  filtro: string = '';


  constructor(private router: Router, private recaudacionesadminservice: RecaudacionesAdminService) { }

  ngOnInit(): void {
    this.recaudacionesadminservice.getClientes().subscribe(data => {
      this.recaudacionesadmin = data;
    });
  }



  get totalPaginas(): number {
    return Math.ceil(this.recaudacionesadmin.length / this.registrosPorPagina);
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
    return this.recaudacionesadmin.slice(inicio, fin);
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

  OpenDetalles(cobro: any): void {
    this.RecaudacionesSeleccionado = cobro;
    const modalElement = document.getElementById('detallesModal2');
    if (modalElement){
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  OpenCrearModal(): void {
    this.nuevoRecaudacion = {};
    const modalElement = document.getElementById('crearModalxd');
    if (modalElement){
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  EliminarRecaudacion(cobro: any): void{
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
        this.recaudacionesadminservice.ElimarPagos(cobro.idpagos).subscribe(() => {
          this.recaudacionesadmin = this.recaudacionesadmin.filter(item => item.idpagos !== cobro.idpagos);
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

  crearRecaudacion(): void {
    this.recaudacionesadminservice.CrearPago(this.nuevoRecaudacion).subscribe((nuevoRecaudacion) => {
      this.recaudacionesadmin.push(nuevoRecaudacion);
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
