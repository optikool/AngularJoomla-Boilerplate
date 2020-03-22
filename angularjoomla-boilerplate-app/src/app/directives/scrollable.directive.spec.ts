import { ScrollableDirective } from './scrollable.directive';
import { ElementRef } from '@angular/core';

describe('ScrollableDirective', () => {
  let el: ElementRef;
  let elRefMock = {};

  beforeEach(() => {
    elRefMock = {
      nativeElement: document.createElement('div')
    };

    el = new ElementRef(elRefMock);
  });

  it('should create an instance', () => {
    const directive = new ScrollableDirective(el);
    expect(directive).toBeTruthy();
  });
});
