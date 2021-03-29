import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EPrincipalComponent } from './e-principal.component';

describe('EPrincipalComponent', () => {
  let component: EPrincipalComponent;
  let fixture: ComponentFixture<EPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
