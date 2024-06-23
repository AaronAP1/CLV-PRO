import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalles-modal-principal',
  templateUrl: './detalles-modal-principal.component.html',
  styleUrls: ['./detalles-modal-principal.component.css']
})
export class DetallesModalPrincipalComponent {

  @Input() cobro: any;

  closeModal() {
    const modal = document.getElementById('DetallesModalData');
    if (modal) {
      modal.style.display = 'none';
    }
  }

}
