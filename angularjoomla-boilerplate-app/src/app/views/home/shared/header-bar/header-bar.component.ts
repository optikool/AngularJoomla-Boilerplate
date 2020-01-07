import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'jma-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
  animations: [
    trigger('dropdownMenuState', [
      state('dropdownHidden', style({
        visibility: 'hidden',
        display: 'none'
      })),
      state('dropdownVisible', style({
        top: '29px', 
        visibility: 'visible',
        left: '1px', 
        width: '202px',
        display: 'block'
      })),
      transition('dropdownHidden <=> dropdownVisible', animate('250ms ease-in'))
    ])
  ]
})
export class HeaderBarComponent implements OnInit {
  router: Router;
  showGallery: Boolean;
  showVideos: Boolean;
  showContact: Boolean;

  constructor(private activatedRoute: ActivatedRoute) {
    this.showGallery = false;
    this.showVideos = false;
    this.showContact = false;
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {

    });

    this.showGallery = true;
    this.showVideos = true;
  }

  navigateToPage(page, params) {
    //this.router.navigate(page, params);
  }
}
