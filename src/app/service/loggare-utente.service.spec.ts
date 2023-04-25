import { TestBed } from '@angular/core/testing';

import { LoggareUtenteService } from './loggare-utente.service';

describe('LoggareUtenteService', () => {
  let service: LoggareUtenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggareUtenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
