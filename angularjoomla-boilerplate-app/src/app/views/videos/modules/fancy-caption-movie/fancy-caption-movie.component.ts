import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jma-fancy-caption-movie',
  templateUrl: './fancy-caption-movie.component.html',
  styleUrls: ['./fancy-caption-movie.component.scss']
})
export class FancyCaptionMovieComponent implements OnInit {
  @Input() public data: any;
  @Input() public gridcolumns: number;
  movies: Array<any>;
  grid: number;

  constructor() { 
    this.movies = [];
    this.grid = 4;
  }

  ngOnInit() {
    this.movies = this.data; // this.galleryService.formatUrls(this.data, this.mainLink, this.mainLinkThumb);
    this.grid = this.gridcolumns;
  }
}
