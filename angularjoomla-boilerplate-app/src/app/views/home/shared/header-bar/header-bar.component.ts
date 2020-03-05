import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { MatMenuTrigger } from '@angular/material';

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
  showGallery: Boolean;
  showVideos: Boolean;
  showContact: Boolean;

  @ViewChild(MatMenuTrigger, {static: false}) trigger: MatMenuTrigger;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
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

  openMenu(event) {
    console.log('Opening menu event', event);
    this.trigger.openMenu();
  }

  closeMenu(event) {
    console.log('Closing menu event', event);
    this.trigger.closeMenu();
  }

  navigateToPage(page) {
    console.log('navigating to page: ', page);
    this.router.navigate(page);
  }
}


// <!--start header-->
// <div id="header" class="fluid">
//     <div class="container_12 clearfix">
//         <!--start logo-->
//         <div id="logo" class="grid_3">
//             <a routerLink="/">
//                 <h1><img src="assets/img/maesworld.png" alt="your logo" width="180" height="40"></h1>
//             </a>
//         </div>
//         <!--end logo-->

//         <!--start navi-->
//         <div id="navi" class="grid_9 omega">

//             <div id="strangemenu" class="clearfix">
//                 <ul>
//                     <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
//                     <li *ngIf="showGallery" jmaMenuDropdown><a routerLink="/gallery" routerLinkActive="active">Galleries</a>
//                         <ul>
//                             <li><a routerLink="/gallery/category/8/118" routerLinkActive="active">J-Pop</a></li>
//                             <li><a routerLink="/gallery/category/9/119" routerLinkActive="active">Import Scene</a></li>
//                             <li jmaMenuDropdown><a routerLink="/gallery/category/10/120" routerLinkActive="active" class="top: 0px; visibility: visible; left: 201px; width: 202px;">World of Warcraft</a>
//                                 <ul>
//                                     <li><a routerLink="/gallery/category/16/126" routerLinkActive="active">Shaman Transmogs</a></li>
//                                     <li><a routerLink="/gallery/category/17/127" routerLinkActive="active">Druid Transmogs</a></li>
//                                     <li><a routerLink="/gallery/category/18/128" routerLinkActive="active">Rogue Transmogs</a></li>
//                                     <li><a routerLink="/gallery/category/19/129" routerLinkActive="active">Hunter Transmogs</a></li>
//                                     <li><a routerLink="/gallery/category/20/130" routerLinkActive="active">Death Knight Transmogs</a></li>
//                                     <li><a routerLink="/gallery/category/21/131" routerLinkActive="active">Mage Transmogs</a></li>
//                                 </ul>
//                             </li>
//                             <li><a routerLink="/gallery/category/11/124" routerLinkActive="active">Beautiful Art</a></li>
//                             <li><a routerLink="/gallery/category/12/121" routerLinkActive="active">Comic Con</a></li>
//                             <li><a routerLink="/gallery/category/13/122" routerLinkActive="active">Cosplay</a></li>
//                             <li><a routerLink="/gallery/category/15/123" routerLinkActive="active">Fanime Con</a></li>
//                             <li><a routerLink="/gallery/category/14/125" routerLinkActive="active">Points of Intrest</a></li>
//                         </ul>
//                     </li>
//                     <li *ngIf="showVideos" jmaMenuDropdown><a routerLink="/videos" routerLinkActive="active">Videos</a>
//                         <ul>
//                             <li jmaMenuDropdown><a routerLink="/videos/category/22/138" routerLinkActive="active">J-Pop</a>
//                                 <ul>
//                                     <li><a routerLink="/videos/category/23/139" routerLinkActive="active">Utada Hikaru</a></li>
//                                     <li><a routerLink="/videos/category/24/140" routerLinkActive="active">BoA</a></li>
//                                     <li><a routerLink="/videos/category/25/141" routerLinkActive="active">Ayumi Hamasaki</a></li>
//                                 </ul>
//                             </li>
//                             <li><a routerLink="/videos/category/26/142" routerLinkActive="active">Warhammer</a></li>
//                             <li jmaMenuDropdown><a routerLink="/videos/category/27/143" routerLinkActive="active">World of Warcraft</a>
//                                 <ul>
//                                     <li><a routerLink="/videos/category/30/144" routerLinkActive="active">Shaman</a></li>
//                                     <li><a routerLink="/videos/category/31/145" routerLinkActive="active">Druid</a></li>
//                                     <li><a routerLink="/videos/category/32/146" routerLinkActive="active">Mage</a></li>
//                                     <li><a routerLink="/videos/category/33/147" routerLinkActive="active">Rogue</a></li>
//                                     <li><a routerLink="/videos/category/34/148" routerLinkActive="active">Group and Story</a></li>
//                                 </ul>
//                             </li>
//                             <li><a routerLink="/videos/category/28/149" routerLinkActive="active">Dragon Nest</a></li>
//                             <li><a routerLink="/videos/category/29/150" routerLinkActive="active">Import Scene</a></li>
//                             <li><a routerLink="/videos/category/37/166" routerLinkActive="active">Live Streams</a></li>
//                         </ul>
//                     </li>
//                     <li *ngIf="showContact"><a href="contact.html">Contact Us</a></li>
//                 </ul>
//             </div>
//         </div>
//         <!--end navi-->
//     </div>
// </div>
// <!--end header-->
