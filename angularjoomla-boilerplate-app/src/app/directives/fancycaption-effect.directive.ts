import { Directive, HostListener, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[appFancyCaptionEffect]'
})
export class FancycaptionEffectDirective implements OnInit {
  @Output() public setIsActive: EventEmitter<{state: string}> = new EventEmitter();

  @HostListener('mouseenter', ['$event']) public onMouseOver(event) {
    console.log('FancycaptionEffectDirective mouseover active: ', event);
    this.setIsActive.emit({state: 'active'});
  }

  @HostListener('mouseleave', ['$event']) public onMouseOut(event) {
    console.log('FancycaptionEffectDirective mouseout inactive: ', event);
    this.setIsActive.emit({state: 'inactive'});
  }

  constructor() {}

  ngOnInit() {}
}
