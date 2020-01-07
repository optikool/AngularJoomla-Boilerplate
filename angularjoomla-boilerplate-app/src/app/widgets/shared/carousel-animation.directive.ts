import { Directive, Renderer, ElementRef, OnInit, HostListener, Input, Output, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Directive({
  selector: '[jmaCarouselAnimation]'
})
export class CarouselAnimationDirective implements OnInit {
  private sliderElement: any;
  private sliderItemElement: any;
  private panelElement: any;
  private sliderCaptionLeftelements: any;
  private prevButton: any;
  private nextButton: any;
  private slideForward: any;
  private slideBackward: any;
  private pauseButton: any;
  private thumbNav: any;
  private carouselAdvanced: boolean;
  private currentIndex: number;
  private pos: number;
  private timerSubscription: Subscription;

  @Input() public data: any;

  @HostListener('mouseover') public onMouseOver() {
    this.showCarouselControls(true);
    this.showCarouselNavControls(true);
    this.stopAutoAdvance();

  }

  @HostListener('mouseout') public onMouseOut(){
    this.showCarouselControls(false);
    this.showCarouselNavControls(false);
    this.startAutoAdvance();
  }

  @HostListener('window:resize') public onWindowResize() {
    this.setPanelItems();
  }

  @HostListener('click', ['$event.target']) public onAdvanceCarousel(event) {
    switch(event.id) {
      case 'prev-button':
        this.advanceCarouselBackward();
      break;
      case 'next-button':
        this.advanceCarouselForward();
      break;
      case 'pause-button':
        this.pauseCarousel();
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer) {
    this.sliderElement = null;
    this.sliderItemElement = null;
    this.panelElement = null;
    this.sliderCaptionLeftelements = null;
    this.prevButton = null;
    this.nextButton = null;
    this.slideForward = null;
    this.slideBackward = null;
    this.pauseButton = null;
    this.thumbNav = null;
    this.carouselAdvanced = false;
    this.currentIndex = 0;
    this.pos = 0;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.sliderElement = this.el.nativeElement.querySelector('#slider');
    this.sliderItemElement = this.el.nativeElement.querySelectorAll('.slider-item');
    this.panelElement = this.el.nativeElement.querySelectorAll('.panel');
    this.sliderCaptionLeftelements = this.el.nativeElement.querySelectorAll('.slider-caption-left');
    this.thumbNav = this.el.nativeElement.querySelector('#thumb-nav');
    this.prevButton = this.el.nativeElement.querySelector('#prev-button');
    this.nextButton = this.el.nativeElement.querySelector('#next-button');
    this.pauseButton = this.el.nativeElement.querySelector('#pause-button');

    this.renderer.setElementClass(this.sliderElement, 'sliderWidget', true);

    this.setPanelItems();
    this.startAutoAdvance();
  }

  setSlideItems() {
    let index: number = 0;
    
    for (index; index < this.sliderItemElement.nativeElement.length; index++) {
      this.renderer.setElementStyle(this.sliderItemElement[index], 'width', this.el.nativeElement.offsetWidth);
    }
  }

  showCarouselControls(paused: boolean) {
    if (paused) {
      this.renderer.setElementStyle(this.prevButton, 'opacity', '1');
      this.renderer.setElementStyle(this.nextButton, 'opacity', '1');
    } else {
      this.renderer.setElementStyle(this.prevButton, 'opacity', '');
      this.renderer.setElementStyle(this.nextButton, 'opacity', '');
    }
  }

  setPanelItems() {
    let index: number = 0;
    let width: string = this.el.nativeElement.offsetWidth;
    let offset: number = -20;
    let OffsetAfter: number = this.el.nativeElement.offsetWidth + 10;
    let zIndex: number = 1;

    for (index; index < this.panelElement.length; index++) {
      this.renderer.setElementStyle(this.panelElement[index], 'z-index', zIndex.toString());
      this.renderer.setElementStyle(this.panelElement[index], 'left', this.pos + 'px');
      zIndex++

      this.renderer.setElementStyle(this.panelElement[index], 'width', width + 'px');
    }
    this.renderer.setElementClass(this.panelElement[this.currentIndex].querySelector('.caption-content'), 'slide-in', true);
    this.renderer.setElementClass(this.thumbNav.querySelector('.panel' + this.currentIndex), 'cur', true);
  }

  updatePanelLocation() {
    let index: number = 0;
    let offset: number = -20;
    let OffsetAfter: number = this.el.nativeElement.offsetWidth + 10;

    for (index; index < this.panelElement.length; index++) {
      this.renderer.setElementStyle(this.panelElement[index], 'left', '-' + this.pos + 'px');
    }
  }

  advanceCarouselForward() {
    if (this.currentIndex >= this.panelElement.length - 1) {
      this.renderer.setElementClass(this.panelElement[this.currentIndex].querySelector('.caption-content'), 'slide-in', false);
      this.renderer.setElementClass(this.thumbNav.querySelector('.panel' + this.currentIndex), 'cur', false);
      this.pos = 0;
      this.updatePanelLocation();
      this.currentIndex = 0;
      this.renderer.setElementClass(this.panelElement[this.currentIndex].querySelector('.caption-content'), 'slide-in', true);
      this.renderer.setElementClass(this.thumbNav.querySelector('.panel' + this.currentIndex), 'cur', true);
      return;
    }

    this.renderer.setElementClass(this.panelElement[this.currentIndex].querySelector('.caption-content'), 'slide-in', false);
    this.renderer.setElementClass(this.thumbNav.querySelector('.panel' + this.currentIndex), 'cur', false);
    this.pos = (this.currentIndex + 1) * this.el.nativeElement.offsetWidth;
    this.updatePanelLocation();
    this.currentIndex++;
    this.renderer.setElementClass(this.panelElement[this.currentIndex].querySelector('.caption-content'), 'slide-in', true);
    this.renderer.setElementClass(this.thumbNav.querySelector('.panel' + this.currentIndex), 'cur', true);
  }

  advanceCarouselBackward() {
    if (this.currentIndex < 0) {
      this.currentIndex = 0;
      return;
    }

    if (this.pos <= 0) {
      this.currentIndex = 0;
      this.pos = 0;
    } else {
      this.renderer.setElementClass(this.panelElement[this.currentIndex].querySelector('.caption-content'), 'slide-in', false);
      this.renderer.setElementClass(this.thumbNav.querySelector('.panel' + this.currentIndex), 'cur', false);
      this.pos = (this.currentIndex - 1) * this.el.nativeElement.offsetWidth;
      this.updatePanelLocation();
      this.currentIndex--;
      this.renderer.setElementClass(this.panelElement[this.currentIndex].querySelector('.caption-content'), 'slide-in', true);
      this.renderer.setElementClass(this.thumbNav.querySelector('.panel' + this.currentIndex), 'cur', true);
    }
  }

  pauseCarousel() {

  }

  startAutoAdvance() {
    const source = timer(5000, 4000);
    this.timerSubscription = source.subscribe(t => this.advanceCarouselForward());
  }

  stopAutoAdvance() {
    this.timerSubscription.unsubscribe();
  }

  showCarouselNavControls(display: boolean) {
    if (display) {
      this.renderer.setElementStyle(this.thumbNav, 'opacity', '1');
    } else {
      this.renderer.setElementStyle(this.thumbNav, 'opacity', '0');
    }
  }

  goToSlide(idx) {
    this.renderer.setElementClass(this.panelElement[this.currentIndex].querySelector('.caption-content'), 'slide-in', false);
    this.renderer.setElementClass(this.thumbNav.querySelector('.panel' + this.currentIndex), 'cur', false);
    this.pos = idx * this.el.nativeElement.offsetWidth;
    this.updatePanelLocation();
    this.currentIndex = idx;
    this.renderer.setElementClass(this.panelElement[this.currentIndex].querySelector('.caption-content'), 'slide-in', true);
    this.renderer.setElementClass(this.thumbNav.querySelector('.panel' + this.currentIndex), 'cur', true);
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }
}
