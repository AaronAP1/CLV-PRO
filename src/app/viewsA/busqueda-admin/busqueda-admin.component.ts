import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-busqueda-admin',
  templateUrl: './busqueda-admin.component.html',
  styleUrls: ['./busqueda-admin.component.css']
})
export class BusquedaADMINComponent {
  codigoPago: string = '1';
  data: any = {}; // Aquí se almacenarán los datos obtenidos de la API

  constructor(private http: HttpClient) {}

  buscarDatos(): void {
    const codigoPago = this.codigoPago.trim();

    if (codigoPago) {
      this.http.get<any>('https://clvproject-production.up.railway.app/api/v1/cliente/buscar/' + codigoPago)
        .subscribe(
          dataArray => {
            console.log('Datos de la API DATOS PERSONA:', dataArray);

            if (Array.isArray(dataArray) && dataArray.length > 0) {
              this.data = dataArray[0]; // Asigna los datos obtenidos al objeto this.data
            } else {
              console.log('No se encontraron datos para el código de pago especificado.');
              this.clearFormData(); // Limpia los datos del formulario si no se encontraron datos
            }
          },
          error => {
            console.error('Error al obtener datos de la API:', error);
            this.clearFormData(); // Limpia los datos del formulario en caso de error
          }
        );
    } else {
      console.log('Ingrese un código de pago válido.');
    }
  }

  clearFormData(): void {
    this.data = {}; // Función para limpiar los datos del formulario
  }

}
