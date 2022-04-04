import { TestBed } from '@angular/core/testing';

import { HomeservicesService } from './homeservices.service';

describe('HomeservicesService', () => {
  let service: HomeservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
