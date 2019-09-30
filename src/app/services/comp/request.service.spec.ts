import { TestBed } from '@angular/core/testing';

import { RequestService } from './request.service';

describe('Request', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Request = TestBed.get(RequestService);
    expect(service).toBeTruthy();
  });
});
