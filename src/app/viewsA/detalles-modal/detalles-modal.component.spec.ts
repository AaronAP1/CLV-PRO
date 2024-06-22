import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesModalComponent } from './detalles-modal.component';

describe('DetallesModalComponent', () => {
  let component: DetallesModalComponent;
  let fixture: ComponentFixture<DetallesModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesModalComponent]
    });
    fixture = TestBed.createComponent(DetallesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
