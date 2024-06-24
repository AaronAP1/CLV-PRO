import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CobrosAdminService {
  private apiUrl = 'https://clvproject-production.up.railway.app/api/v1/cobros';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listar`);
  }

  eliminarCobro(idcobros:number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/borrar/${idcobros}`);
  }

  crearCobro(cobro: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear`, cobro);
  }
}
