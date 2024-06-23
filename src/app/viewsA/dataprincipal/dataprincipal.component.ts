import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataConsolidada } from 'src/app/api/dataconsolidado.service';

import * as bootstrap from 'bootstrap';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-dataprincipal',
  templateUrl: './dataprincipal.component.html',
  styleUrls: ['./dataprincipal.component.css']
})
export class DataprincipalComponent implements OnInit {
  dataprincipal: any[] = [];
  paginaActual = 1;
  registrosPorPagina = 10;
  RecaudacionesTotal: any;
  nuevoRecaudacion: any = {};
  filtro: string = '';


  constructor(private router: Router, private dataconsolidada: DataConsolidada) { }

  ngOnInit(): void {
    this.dataconsolidada.getClientes().subscribe(data => {
      this.dataprincipal = data;
    });
  }



  get totalPaginas(): number {
    return Math.ceil(this.dataprincipal.length / this.registrosPorPagina);
  }

  get paginas(): number[] {
    const paginas: number[] = [];
    for (let i = 1; i <= this.totalPaginas; i++) {
      paginas.push(i);
    }
    return paginas;
  }

  get cobrosFiltrados(): any[] {
    return this.dataprincipal.filter(cobro =>
      cobro.codigopago && cobro.codigopago.toString().toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  get cobrosPaginados(): any[] {
    const inicio = (this.paginaActual - 1) * this.registrosPorPagina;
    const fin = inicio + this.registrosPorPagina;
    return this.dataprincipal.slice(inicio, fin);
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
    this.RecaudacionesTotal = cobro;
    const modalElement = document.getElementById('DetallesModalData');
    if (modalElement){
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  OpenCrearModal(): void{
    this.nuevoRecaudacion = {};
    const modalElement = document.getElementById('CrearModalData');
    if (modalElement){
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  EliminarData(cobro: any): void {
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
        this.dataconsolidada.EliminarCliente(cobro.idcliente).subscribe(() => {
          this.dataprincipal = this.dataprincipal.filter(item => item.idcliente !== cobro.idcliente);
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
    this.dataconsolidada.CrearCliente(this.nuevoRecaudacion).subscribe((nuevoRecaudacion) => {
      this.dataprincipal.push(nuevoRecaudacion);
      Swal.fire({
        title: "¡Creado!",
        text: "El nuevo cliente ha sido creado con éxito.",
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
        text: "Hubo un error al crear el cliente.",
        icon: "error"
      });
    });
  }

}
