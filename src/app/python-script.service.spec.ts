import { TestBed } from '@angular/core/testing';

import { PythonScriptService } from './python-script.service';

describe('PythonScriptService', () => {
  let service: PythonScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PythonScriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
