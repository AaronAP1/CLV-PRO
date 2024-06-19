import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataConsolidada } from 'src/app/api/dataconsolidado.service';

@Component({
  selector: 'app-dataprincipal',
  templateUrl: './dataprincipal.component.html',
  styleUrls: ['./dataprincipal.component.css']
})
export class DataprincipalComponent implements OnInit {
  dataprincipal: any[] = [];
  paginaActual = 1;
  registrosPorPagina = 10;


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

}
