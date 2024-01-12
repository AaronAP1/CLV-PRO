import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosclienteComponent } from './datoscliente.component';

describe('DatosclienteComponent', () => {
  let component: DatosclienteComponent;
  let fixture: ComponentFixture<DatosclienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosclienteComponent]
    });
    fixture = TestBed.createComponent(DatosclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
