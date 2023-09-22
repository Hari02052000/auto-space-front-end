import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isTokenGuard } from './is-token.guard';

describe('isTokenGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isTokenGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
