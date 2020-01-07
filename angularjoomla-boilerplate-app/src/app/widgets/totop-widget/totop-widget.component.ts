import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'jma-totop-widget',
  templateUrl: './totop-widget.component.html',
  styleUrls: ['./totop-widget.component.scss']
})
export class TotopWidgetComponent implements OnInit {
  private timeSubscription: Subscription;

  constructor() { }

  ngOnInit() {
  }

  scrollToTop() {
    const source = timer(0, 10);
    let that = this;
    this.timeSubscription = source.subscribe(t => {
      if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0){
        window.scrollBy(0,-100);
      } else {
        that.timeSubscription.unsubscribe();
      }
    });
  }

}
