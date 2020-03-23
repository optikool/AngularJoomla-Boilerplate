import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'jma-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  showGallery: Boolean;
  showVideos: Boolean;
  showContact: Boolean;
  modulesList: Array<any>;
  enteredButton = false;
  isMatMenuOpen = false;
  isMatMenu2Open = false;
  prevButtonTrigger;

  @ViewChild(MatMenuTrigger, {static: false}) trigger: MatMenuTrigger;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private render: Renderer2) {
    this.showGallery = false;
    this.showVideos = false;
    this.showContact = false;
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {

    });

    this.showGallery = true;
    this.showVideos = true;
  }

  navigateToPage(page) {
    console.log('navigating to page: ', page);
    this.router.navigate(page);
  }

  menuEnter() {
    this.isMatMenuOpen = true;
    if (this.isMatMenu2Open) {
      this.isMatMenu2Open = false;
    }
  }

  menuLeave(trigger, button) {
    setTimeout(() => {
      if (!this.isMatMenu2Open && !this.enteredButton) {
        this.isMatMenuOpen = false;
        trigger.closeMenu();
        this.render.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.render.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
      } else {
        this.isMatMenuOpen = false;
      }
    }, 80)
  }

  menu2enter() {
    this.isMatMenu2Open = true;
  }

  menu2Leave(trigger1, trigger2, button) {
    setTimeout(() => {
      if (this.isMatMenu2Open) {
        trigger1.closeMenu();
        this.isMatMenuOpen = false;
        this.isMatMenu2Open = false;
        this.enteredButton = false;
        this.render.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.render.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
      } else {
        this.isMatMenu2Open = false;
        trigger2.closeMenu();
      }
    }, 100)
  }

  buttonEnter(trigger) {
    setTimeout(() => {
      if(this.prevButtonTrigger && this.prevButtonTrigger != trigger){
        this.prevButtonTrigger.closeMenu();
        this.prevButtonTrigger = trigger;
        this.isMatMenuOpen = false;
        this.isMatMenu2Open = false;
        trigger.openMenu();
        this.render.removeClass(trigger.menu.items.first['_elementRef'].nativeElement, 'cdk-focused');
        this.render.removeClass(trigger.menu.items.first['_elementRef'].nativeElement, 'cdk-program-focused');
      }
      else if (!this.isMatMenuOpen) {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger
        trigger.openMenu();
        this.render.removeClass(trigger.menu.items.first['_elementRef'].nativeElement, 'cdk-focused');
        this.render.removeClass(trigger.menu.items.first['_elementRef'].nativeElement, 'cdk-program-focused');
      }
      else {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger
      }
    })
  }

  buttonLeave(trigger, button) {
    setTimeout(() => {
      if (this.enteredButton && !this.isMatMenuOpen) {
        trigger.closeMenu();
        this.render.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.render.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
      } if (!this.isMatMenuOpen) {
        trigger.closeMenu();
        this.render.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.render.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
      } else {
        this.enteredButton = false;
      }
    }, 100)
  }
}

