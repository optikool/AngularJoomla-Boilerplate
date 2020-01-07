import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'jma-welcome-widget',
  templateUrl: './welcome-widget.component.html',
  styleUrls: ['./welcome-widget.component.scss']
})
export class WelcomeWidgetComponent implements OnInit {
  @Input() public data: any;
  description: any;

  constructor() {}

  ngOnInit() {
    this.description = this.data;
  }
}
