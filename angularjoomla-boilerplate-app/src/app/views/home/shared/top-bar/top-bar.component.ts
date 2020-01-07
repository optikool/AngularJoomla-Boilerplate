import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from '../../../../services/social-media.service';

@Component({
  selector: 'jma-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  private link: string;

  constructor() { 
    this.link = null;
  }

  public goToSocial(name: string) {
    SocialMediaService.goToSocial(name);
  }
}
