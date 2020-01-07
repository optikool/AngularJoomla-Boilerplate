import { WindowScrollDirective } from './window-scroll.directive';
import { ElementRef, Renderer } from '@angular/core';

describe('WindowScrollDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef();
    const renderer = null;
    const directive = new WindowScrollDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
