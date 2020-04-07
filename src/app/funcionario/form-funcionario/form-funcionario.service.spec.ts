import { TestBed } from '@angular/core/testing';

import { FormFuncionarioService } from './form-funcionario.service';

describe('FormFuncionarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormFuncionarioService = TestBed.get(FormFuncionarioService);
    expect(service).toBeTruthy();
  });
});
