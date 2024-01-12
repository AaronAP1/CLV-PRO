import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datoscliente',
  templateUrl: './datoscliente.component.html',
  styleUrls: ['./datoscliente.component.css']
})
export class DatosclienteComponent {

  constructor(private router: Router) { }

  onLoginClick(): void {
    this.router.navigate(['pagos']);
  }

}
