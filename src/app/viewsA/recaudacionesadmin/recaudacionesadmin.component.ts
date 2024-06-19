import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

}
