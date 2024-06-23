import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecaudacionesAdminService {
  private apiUrl = 'https://clvproject-production.up.railway.app/api/v1/pagos';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listar`);
  }

  ElimarPagos(idpagos:number): Observable <any>{
    return this.http.delete(`${this.apiUrl}/borrar/${idpagos}`);
  }

  CrearPago(pago: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/crear`, pago);
  }
}
