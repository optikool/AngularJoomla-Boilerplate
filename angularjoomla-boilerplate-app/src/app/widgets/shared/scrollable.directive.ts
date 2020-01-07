import { Directive, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[jmaScrollable]'
})
export class ScrollableDirective {
  @Output() public scrollPosition = new EventEmitter();
  
  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', ['$event']) public onscroll(event) {
    try {
      const top = window.scrollY; // parseInt(event.target.scrollingElement.scrollTop); //
      const height = parseInt(event.target.scrollingElement.scrollHeight);
      const offset = 240; //parseInt(event.target.scrollingElement.clientHeight);
      const body = document.body;
      const html = document.documentElement;
      //const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);


      //console.log('body: ', body);
      //console.log('html: ', html);
      // console.log('window.scrollY: ', window.scrollY);
      // console.log('top: ', top);
      // console.log('height: ', height);
      // console.log('offset: ', offset);
      // console.log('$(window).scrollTop(): ', $(window).scrollTop());
      // console.log('$(document).height(): ',  $(document).height());
      // console.log('$(window).height(): ', $(window).height());
      if (top >= height - offset) {
        // if  ($(window).scrollTop() + docinc >= $(document).height() - $(window).height()){
        // const event = new CustomEvent('mycustomevent', {detail: 'abc', bubbles : true});
        // this.elRef.nativeElement.dispatchEvent(event)
        this.scrollPosition.emit({type: 'infinitScroll', status: 'bottom'});
      }

      // if (top === 0) {
      //   this.scrollPosition.emit({type: 'infinitScroll', status: 'top'});
      // }
    } catch(e) {
      console.log('ScrollableDirective Error: ', e);
    }
  }
}
