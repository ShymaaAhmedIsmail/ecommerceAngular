import { TestBed } from '@angular/core/testing';

import { ShardedService } from './sharded.service';

describe('ShardedService', () => {
  let service: ShardedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShardedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
