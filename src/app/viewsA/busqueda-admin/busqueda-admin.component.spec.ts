import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaADMINComponent } from './busqueda-admin.component';

describe('BusquedaADMINComponent', () => {
  let component: BusquedaADMINComponent;
  let fixture: ComponentFixture<BusquedaADMINComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusquedaADMINComponent]
    });
    fixture = TestBed.createComponent(BusquedaADMINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
