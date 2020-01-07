import { Injectable } from '@angular/core';

import { externalLinks } from '../constants/rest.constants';

@Injectable()
export class SocialMediaService {
  static goToSocial(name: string) {
    let link: string;

    switch(name) {
      case 'facebook':
        link = externalLinks.socialLinks.facebook;
        break;
      case 'linkedin':
        link = externalLinks.socialLinks.linkedin;
        break;
      case 'twitter':
        link = externalLinks.socialLinks.twitter;
        break;
      case 'youtube':
        link = externalLinks.socialLinks.youtube;
        break;
      case 'eyenet':
        link = externalLinks.socialLinks.eyenet;
        break;
    }

    if(link) {
      window.open(link, '_blank');
    }
  }
}
