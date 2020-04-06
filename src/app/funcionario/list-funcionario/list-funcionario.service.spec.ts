import { TestBed } from '@angular/core/testing';

import { ListFuncionarioService } from './list-funcionario.service';

describe('ListFuncionarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListFuncionarioService = TestBed.get(ListFuncionarioService);
    expect(service).toBeTruthy();
  });
});
