import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearModalCobrosComponent } from './crear-modal-cobros.component';

describe('CrearModalCobrosComponent', () => {
  let component: CrearModalCobrosComponent;
  let fixture: ComponentFixture<CrearModalCobrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearModalCobrosComponent]
    });
    fixture = TestBed.createComponent(CrearModalCobrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
