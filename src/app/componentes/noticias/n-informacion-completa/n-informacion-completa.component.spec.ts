import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NInformacionCompletaComponent } from './n-informacion-completa.component';

describe('NInformacionCompletaComponent', () => {
  let component: NInformacionCompletaComponent;
  let fixture: ComponentFixture<NInformacionCompletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NInformacionCompletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NInformacionCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
