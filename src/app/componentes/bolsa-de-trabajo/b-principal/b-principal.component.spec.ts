import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BPrincipalComponent } from './b-principal.component';

describe('BPrincipalComponent', () => {
  let component: BPrincipalComponent;
  let fixture: ComponentFixture<BPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
