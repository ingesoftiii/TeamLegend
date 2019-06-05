import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationEquipoComponent } from './navigation-equipo.component';

describe('NavigationEquipoComponent', () => {
  let component: NavigationEquipoComponent;
  let fixture: ComponentFixture<NavigationEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
