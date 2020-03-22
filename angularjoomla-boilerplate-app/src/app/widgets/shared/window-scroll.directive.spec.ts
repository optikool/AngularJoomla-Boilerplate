import { WindowScrollDirective } from './window-scroll.directive';
import { ElementRef, Renderer } from '@angular/core';

describe('WindowScrollDirective', () => {
  let el: ElementRef;
  let renderer: Renderer;

  beforeEach(() => {
    let elRefMock = {
      nativeElement: document.createElement('div')
    };

    el = new ElementRef(elRefMock);
  });

  it('should create an instance', () => {
    const directive = new WindowScrollDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
