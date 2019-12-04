import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'angularjoomla-boilerplate-app: ' + Date.now().toString();

  constructor(private router: Router, private swUpdate: SwUpdate) {}

  ngOnInit() {
    // Reload app if new content is available
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New content available. Reload?')) {
          this.router.routeReuseStrategy.shouldReuseRoute = () => true;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([this.router.url]);
        }
      });
    }
  }
}
