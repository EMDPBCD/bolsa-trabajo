import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionOfertaComponent } from './informacion-oferta.component';

describe('InformacionOfertaComponent', () => {
  let component: InformacionOfertaComponent;
  let fixture: ComponentFixture<InformacionOfertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionOfertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
