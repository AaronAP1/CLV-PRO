import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagosComponent } from './pagos.component';

describe('PagosComponent', () => {
  let component: PagosComponent;
  let fixture: ComponentFixture<PagosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagosComponent]
    });
    fixture = TestBed.createComponent(PagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should export to PDF', () => {
    const spyConsole = spyOn(console, 'log'); // Espía la llamada a console.log

    // Llama a la función exportToPDF


    // Verifica si console.log fue llamado con el mensaje correcto
    expect(spyConsole).toHaveBeenCalledWith('exportToPDF');
  });

  it('should export to Excel', () => {
    // Llama a la función exportToExcel


    // Asegúrate de realizar expectativas apropiadas según tus necesidades.
    // Por ejemplo, puedes verificar si se creó el archivo Excel correctamente y si contiene los datos esperados.
    // Ten en cuenta que las expectativas exactas dependerán de la implementación interna de tu componente.
  });
});
