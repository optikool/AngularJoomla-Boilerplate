import { Directive, HostListener, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[jmaWindowScroll]'
})
export class WindowScrollDirective implements OnInit {
  @HostListener('window:scroll', []) public onWindowScroll() {
    this.handleScroll();
  }
  constructor(private el: ElementRef, private renderer: Renderer) { }

  handleScroll() {
    if (document.documentElement.scrollTop !== 0) {
      this.renderer.setElementStyle(this.el.nativeElement, 'opacity', '1');
    } else {
      this.renderer.setElementStyle(this.el.nativeElement, 'opacity', '0');
    }
  }

  ngOnInit() {
    this.renderer.setElementStyle(this.el.nativeElement, 'opacity', '0');
  }
}
