import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Equipo3Component } from './equipo3.component';

describe('Equipo3Component', () => {
  let component: Equipo3Component;
  let fixture: ComponentFixture<Equipo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Equipo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Equipo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
