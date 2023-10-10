import { TestBed } from '@angular/core/testing';

import { ServicioDBZService } from './servicio-dbz.service';

describe('ServicioDBZService', () => {
  let service: ServicioDBZService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDBZService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
