import { TestBed, inject } from '@angular/core/testing';

import { SocialMediaService } from './social-media.service';

describe('SocialMediaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialMediaService]
    });
  });

  it('should ...', inject([SocialMediaService], (service: SocialMediaService) => {
    expect(service).toBeTruthy();
  }));
});
