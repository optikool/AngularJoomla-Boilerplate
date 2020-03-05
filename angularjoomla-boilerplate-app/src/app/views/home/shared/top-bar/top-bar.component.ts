import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from '../../../../services/social-media.service';

@Component({
  selector: 'jma-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  links: Array<any>;
  link: string

  constructor() { 
    this.link = null;
    this.links = [];
  }

  public goToSocial(name: string) {
    SocialMediaService.goToSocial(name);
  }
}
