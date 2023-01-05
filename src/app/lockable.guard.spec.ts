import { TestBed } from '@angular/core/testing';

import { LockableGuard } from './lockable.guard';

describe('LockableGuard', () => {
  let guard: LockableGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LockableGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
