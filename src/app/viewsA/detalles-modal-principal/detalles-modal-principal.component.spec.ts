import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesModalPrincipalComponent } from './detalles-modal-principal.component';

describe('DetallesModalPrincipalComponent', () => {
  let component: DetallesModalPrincipalComponent;
  let fixture: ComponentFixture<DetallesModalPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesModalPrincipalComponent]
    });
    fixture = TestBed.createComponent(DetallesModalPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
