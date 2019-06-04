import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesccripcionComponent } from './desccripcion.component';

describe('DesccripcionComponent', () => {
  let component: DesccripcionComponent;
  let fixture: ComponentFixture<DesccripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesccripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesccripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
