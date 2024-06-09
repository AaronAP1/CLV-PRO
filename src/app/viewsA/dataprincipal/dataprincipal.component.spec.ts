import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataprincipalComponent } from './dataprincipal.component';

describe('DataprincipalComponent', () => {
  let component: DataprincipalComponent;
  let fixture: ComponentFixture<DataprincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataprincipalComponent]
    });
    fixture = TestBed.createComponent(DataprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
