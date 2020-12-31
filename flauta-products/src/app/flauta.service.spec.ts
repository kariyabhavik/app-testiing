import { TestBed } from '@angular/core/testing';

import { FlautaService } from './flauta.service';

describe('FlautaService', () => {
  let service: FlautaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlautaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
