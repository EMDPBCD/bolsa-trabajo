import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EBuscadorComponent } from './e-buscador.component';

describe('EBuscadorComponent', () => {
  let component: EBuscadorComponent;
  let fixture: ComponentFixture<EBuscadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EBuscadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
