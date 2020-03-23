import { CarouselAnimationDirective } from './carousel-animation.directive';
import { ElementRef, Renderer } from '@angular/core';

describe('CarouselAnimationDirective', () => {
  let el: ElementRef;
  let renderer: Renderer;

  beforeEach(() => {
    let elRefMock = {
      nativeElement: document.createElement('div')
    };

    el = new ElementRef(elRefMock);
  });

  it('should create an instance', () => {
    const directive = new CarouselAnimationDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
