import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NPrincipalComponent } from './n-principal.component';

describe('NPrincipalComponent', () => {
  let component: NPrincipalComponent;
  let fixture: ComponentFixture<NPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
