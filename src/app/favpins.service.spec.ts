import { TestBed, inject } from '@angular/core/testing';

import { FavpinsService } from './favpins.service';

describe('FavpinsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavpinsService]
    });
  });

  it('should be created', inject([FavpinsService], (service: FavpinsService) => {
    expect(service).toBeTruthy();
  }));
});
