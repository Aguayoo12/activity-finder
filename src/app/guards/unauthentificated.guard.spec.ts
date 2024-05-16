import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { unauthentificatedGuard } from './unauthentificated.guard';

describe('unauthentificatedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => unauthentificatedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
