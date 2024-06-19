import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CobrosAdminService } from 'src/app/api/cobrosadmin.service';

@Component({
  selector: 'app-cobrosadmin',
  templateUrl: './cobrosadmin.component.html',
  styleUrls: ['./cobrosadmin.component.css']
})
export class CobrosadminComponent implements OnInit {
  cobrosadmin: any[] = [];
  paginaActual = 1;
  registrosPorPagina = 10;


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

}
