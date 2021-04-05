import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EEmpresaInformacionComponent } from './e-empresa-informacion.component';

describe('EEmpresaInformacionComponent', () => {
  let component: EEmpresaInformacionComponent;
  let fixture: ComponentFixture<EEmpresaInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EEmpresaInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EEmpresaInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
