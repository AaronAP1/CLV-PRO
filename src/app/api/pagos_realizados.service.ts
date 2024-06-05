import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagosRealizadosService {
  private apiUrl = 'https://clvproject-production.up.railway.app/api/v1/cobros/buscar/cod/';

  constructor(private http: HttpClient) { }

  obtenerpagosrealizados(codigodepago: string): Observable<any> {
    const url = `${this.apiUrl}${codigodepago}`;
    return this.http.get<any>(url);
  }
}
