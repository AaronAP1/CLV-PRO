import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoRealizadoComponent } from './pago-realizado.component';

describe('PagoRealizadoComponent', () => {
  let component: PagoRealizadoComponent;
  let fixture: ComponentFixture<PagoRealizadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagoRealizadoComponent]
    });
    fixture = TestBed.createComponent(PagoRealizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
