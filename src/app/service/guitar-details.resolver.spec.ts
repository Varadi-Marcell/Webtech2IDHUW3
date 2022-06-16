import { TestBed } from '@angular/core/testing';

import { GuitarDetailsResolver } from './guitar-details.resolver';

describe('GuitarDetailsResolver', () => {
  let resolver: GuitarDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GuitarDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
