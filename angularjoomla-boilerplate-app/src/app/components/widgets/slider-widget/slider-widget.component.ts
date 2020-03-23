import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
// import { CarouselAnimationDirective } from '../shared/carousel-animation.directive';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';
// import { externalLinks } from '../../constants/rest.constants';

export interface SliderWidget {

}

@Component({
  selector: 'app-slider-widget',
  templateUrl: './slider-widget.component.html',
  styleUrls: ['./slider-widget.component.scss']
})
export class SliderWidgetComponent implements OnInit {
  @Input() public data: any;
  // @ViewChild(CarouselAnimationDirective, {static: false}) public ca: CarouselAnimationDirective;
  
  // galleries: any;
  // mainLink: string;
  // mainLinkThumb: string;
  // state: string;

  constructor() {
    // this.galleries = [];
    // this.mainLink = '';
    // this.state = 'textHidden';
  }

  ngOnInit() {
    // console.log('Data loaded: ', this.data);
    // this.mainLink = externalLinks.xGalleryLinks.image;
    // this.mainLinkThumb = externalLinks.xGalleryLinks.thumb;

    // this.data.filter((item) => {
    //   return item.animateClassName = this.getAnimationClass();
    // });

    // this.galleries = this.data;
  }

  // getSliderImage(img: string, isThumb: boolean) {
  //   if (isThumb) {
  //     return this.mainLinkThumb + img;
  //   } 

  //   return this.mainLink + img;
  // }

  goToSlide(idx) {
    // this.ca.goToSlide(idx);
  }

  getAnimationClass() {
    const classList = [
      'slider-caption-top',
      'slider-caption-left',
      'slider-caption-right',
      'slider-caption-bottom'
    ];
    let index =  Math.floor(Math.random() * Math.floor(classList.length));

    return classList[index];
  }
}
