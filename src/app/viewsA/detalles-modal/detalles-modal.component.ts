import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-detalles-modal',
  templateUrl: './detalles-modal.component.html',
  styleUrls: ['./detalles-modal.component.css']
})
export class DetallesModalComponent {
  @Input() cobro: any;

  closeModal() {
    const modal = document.getElementById('detallesModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
}
