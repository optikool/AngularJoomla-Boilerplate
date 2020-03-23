import { Directive, HostListener, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[appMenuDropdown]'
})
export class MenuDropdownDirective implements OnInit {
  private ul;

  @HostListener('mouseenter') public onHoverIn() {
    this.hover(true);
  }

  @HostListener('mouseleave') public onHoverOut() {
    this.hover(false);
  }

  constructor(private el: ElementRef, private renderer: Renderer) { 
    this.ul = null;
  }

  hover(shouldHover: boolean) {
    console.log('shouldHover: ', shouldHover);
    if (shouldHover) {
      this.renderer.setElementStyle(this.ul, 'visibility', 'visible');
      this.renderer.setElementStyle(this.ul, 'display', 'block');
    } else {
      this.renderer.setElementStyle(this.ul, 'visibility', 'hidden');
      this.renderer.setElementStyle(this.ul, 'display', 'none');
    }
  }

  ngOnInit() {
    this.ul = this.el.nativeElement.getElementsByTagName('ul')[0];
  }
}
