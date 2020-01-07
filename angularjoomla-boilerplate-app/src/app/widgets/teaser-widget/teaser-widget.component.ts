import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jma-teaser-widget',
  templateUrl: './teaser-widget.component.html',
  styleUrls: ['./teaser-widget.component.scss']
})
export class TeaserWidgetComponent implements OnInit {
  @Input() public data: any;
  // title | wrapThemeColor
  title: string;
  category: string;
  
  constructor() { 
    this.title = '';
    this.category = '';
  }

  ngOnInit() {
    this.title = this.data.title;
    this.category = this.data.category;
  }

  ngOnChanges(values) {
    const currentValue = values.data.currentValue;
    const previousValue = values.data.previousValue;
    const firstChange = values.data.firstChange;

    if (firstChange || currentValue.id === previousValue.id) {
      return;
    }

    this.title = currentValue.title;
    this.category = currentValue.category;
  }
}
