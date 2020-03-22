import { MenuDropdownDirective } from './menu-dropdown.directive';
import { ElementRef, Renderer } from '@angular/core';

describe('MenuDropdownDirective', () => {
  let el: ElementRef;
  let renderer: Renderer;
  let elRefMock = {};

  beforeEach(() => {
    elRefMock = {
      nativeElement: document.createElement('div')
    };

    el = new ElementRef(elRefMock);
  });

  it('should create an instance', () => {
    const directive = new MenuDropdownDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
