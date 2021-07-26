import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionAspirantesComponent } from './informacion-aspirantes.component';

describe('InformacionAspirantesComponent', () => {
  let component: InformacionAspirantesComponent;
  let fixture: ComponentFixture<InformacionAspirantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionAspirantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionAspirantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
