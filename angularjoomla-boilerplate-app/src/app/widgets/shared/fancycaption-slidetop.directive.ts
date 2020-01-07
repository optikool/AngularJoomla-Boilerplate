import { Directive, HostListener, ElementRef, Renderer, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[jmaFancycaptionSlidetop]'
})
export class FancycaptionSlidetopDirective implements OnInit {
  @Input() public slidepos;
  private slideTop;

  @HostListener('mouseover') public onMouseOver() {
    this.hover(true);
  }

  @HostListener('mouseout') public onMouseOut() {
    this.hover(false);
  }

  constructor(private el: ElementRef, private renderer: Renderer) {
    this.slideTop = null; 
  }

  hover(shouldHover: Boolean) {
    if (shouldHover) {
      this.renderer.setElementStyle(this.slideTop, 'top', '0px');
    } else {
      this.renderer.setElementStyle(this.slideTop, 'top', `${this.slidepos}px`);
    }
  }

  ngOnInit() {
    this.slideTop = this.el.nativeElement.querySelector('.slide-top');
    this.renderer.setElementStyle(this.slideTop, 'top', `${this.slidepos}px`);
  }
}
