import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.scss']
})
export class FooterBarComponent implements OnInit {
  
  constructor(private router: Router) {}

  ngOnInit() {

  }

  navigateToPage(page) {
    console.log('navigating to page: ', page);
    this.router.navigate(page);
  }
}
