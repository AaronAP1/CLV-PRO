import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobrosadminComponent } from './cobrosadmin.component';

describe('CobrosadminComponent', () => {
  let component: CobrosadminComponent;
  let fixture: ComponentFixture<CobrosadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CobrosadminComponent]
    });
    fixture = TestBed.createComponent(CobrosadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
