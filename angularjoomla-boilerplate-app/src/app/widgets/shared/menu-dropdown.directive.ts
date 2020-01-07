import { Directive, HostListener, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[jmaMenuDropdown]'
})
export class MenuDropdownDirective implements OnInit {
  private ul;

  @HostListener('mouseover') public onHoverIn() {
    this.hover(true);
  }

  @HostListener('mouseout') public onHoverOut() {
    this.hover(false);
  }

  constructor(private el: ElementRef, private renderer: Renderer) { 
    this.ul = null;
  }

  hover(shouldHover: boolean) {
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
