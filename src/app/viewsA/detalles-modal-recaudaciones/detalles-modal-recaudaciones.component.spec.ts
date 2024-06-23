import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesModalRecaudacionesComponent } from './detalles-modal-recaudaciones.component';

describe('DetallesModalRecaudacionesComponent', () => {
  let component: DetallesModalRecaudacionesComponent;
  let fixture: ComponentFixture<DetallesModalRecaudacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesModalRecaudacionesComponent]
    });
    fixture = TestBed.createComponent(DetallesModalRecaudacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
