import { TestBed } from '@angular/core/testing';

import { Adminservice } from './admin.service';

describe('AdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Adminservice = TestBed.get(Adminservice);
    expect(service).toBeTruthy();
  });
});
