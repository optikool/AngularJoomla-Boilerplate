import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CarouselAnimationDirective } from '../shared/carousel-animation.directive';
import { externalLinks } from '../../constants/rest.constants';


@Component({
  selector: 'jma-slider-widget',
  templateUrl: './slider-widget.component.html',
  styleUrls: ['./slider-widget.component.scss'],
  animations: [
    trigger('slideInText', [
      state('textHidden', style({
        opacity: 0,
        left: '-300px'
      })),
      state('textVisible', style({
        opacity: 0.8,
        left: '50%'
      })),
      transition('textHidden <=> textVisible', animate('250ms ease-in'))
    ])
  ]
})
export class SliderWidgetComponent implements OnInit {
  @Input() public data: any;
  @ViewChild(CarouselAnimationDirective, {static: false}) public ca: CarouselAnimationDirective;
  
  galleries: any;
  mainLink: string;
  mainLinkThumb: string;
  state: string;

  constructor() {
    this.galleries = [];
    this.mainLink = '';
    this.state = 'textHidden';
  }

  ngOnInit() {
    this.mainLink = externalLinks.xGalleryLinks.image;
    this.mainLinkThumb = externalLinks.xGalleryLinks.thumb;

    this.data.filter((item) => {
      return item.animateClassName = this.getAnimationClass();
    });

    this.galleries = this.data;
  }

  // getSliderImage(img: string, isThumb: boolean) {
  //   if (isThumb) {
  //     return this.mainLinkThumb + img;
  //   } 

  //   return this.mainLink + img;
  // }

  goToSlide(idx) {
    this.ca.goToSlide(idx);
  }

  getAnimationClass() {
    let classList = [
      'slider-caption-top',
      'slider-caption-left',
      'slider-caption-right',
      'slider-caption-bottom'
    ];
    let index =  Math.floor(Math.random() * Math.floor(classList.length));

    return classList[index];
  }
}
