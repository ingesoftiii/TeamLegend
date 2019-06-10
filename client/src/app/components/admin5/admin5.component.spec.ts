import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin5Component } from './admin5.component';

describe('Admin5Component', () => {
  let component: Admin5Component;
  let fixture: ComponentFixture<Admin5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
