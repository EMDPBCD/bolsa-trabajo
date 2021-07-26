import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasAspirantesComponent } from './ofertas-aspirantes.component';

describe('OfertasAspirantesComponent', () => {
  let component: OfertasAspirantesComponent;
  let fixture: ComponentFixture<OfertasAspirantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasAspirantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasAspirantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
