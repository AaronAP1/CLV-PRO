import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagosRealizadosService {
  private apiUrl = 'https://apiclvdjango.onrender.com/consumo/api/clvrec/';

  constructor(private http: HttpClient) { }

  obtenerpagosrealizados(codigoPago: string): Observable<any> {
    const url = `${this.apiUrl}${codigoPago}`;
    return this.http.get<any>(url);
  }
}
