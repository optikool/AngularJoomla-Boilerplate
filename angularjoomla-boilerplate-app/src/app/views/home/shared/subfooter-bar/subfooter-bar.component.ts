import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from '../../../../services/social-media.service';

@Component({
  selector: 'jma-subfooter-bar',
  templateUrl: './subfooter-bar.component.html',
  styleUrls: ['./subfooter-bar.component.scss']
})
export class SubfooterBarComponent implements OnInit {
  private link: String;
  copyDate: number;
  
  constructor() { 
    this.link = null;
    this.copyDate = null;
  }

  public goToSocial(name: string) {
    SocialMediaService.goToSocial(name);
  }

  ngOnInit() {
    this.copyDate = this.getCopyDate();
  }

  private getCopyDate() {
    let date = new Date();
    let year = date.getFullYear();
    return year;
  }
}
