import { TestBed } from '@angular/core/testing';

import { OpensourceService } from './opensource.service';

describe('OpensourceService', () => {
  let service: OpensourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpensourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
