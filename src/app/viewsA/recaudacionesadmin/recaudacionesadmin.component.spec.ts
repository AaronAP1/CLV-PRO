import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaudacionesadminComponent } from './recaudacionesadmin.component';

describe('RecaudacionesadminComponent', () => {
  let component: RecaudacionesadminComponent;
  let fixture: ComponentFixture<RecaudacionesadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecaudacionesadminComponent]
    });
    fixture = TestBed.createComponent(RecaudacionesadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
