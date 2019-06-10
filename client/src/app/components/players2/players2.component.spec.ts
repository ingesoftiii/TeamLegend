import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Players2Component } from './players2.component';

describe('Players2Component', () => {
  let component: Players2Component;
  let fixture: ComponentFixture<Players2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Players2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Players2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
