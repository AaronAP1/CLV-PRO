import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datoscontrato',
  templateUrl: './datoscontrato.component.html',
  styleUrls: ['./datoscontrato.component.css']
})
export class DatoscontratoComponent {

  constructor(private router: Router) { }

  onLoginClick(): void {
    this.router.navigate(['pagos']);
  }

}
