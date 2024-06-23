import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataConsolidada {
  private apiUrl = 'https://clvproject-production.up.railway.app/api/v1/cliente';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listar`);
  }

  EliminarCliente(idcliente: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/borrar/${idcliente}`);
  }

  CrearCliente(cliente: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/crear`, cliente);
  }
}
