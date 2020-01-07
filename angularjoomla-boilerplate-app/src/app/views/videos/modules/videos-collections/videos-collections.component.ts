import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jma-videos-collections',
  templateUrl: './videos-collections.component.html',
  styleUrls: ['./videos-collections.component.scss']
})
export class VideosCollectionsComponent implements OnInit {
  @Input() public data: any;
  videos: Array<any>;
  limit: number;
  hasVideos: boolean
  //  | outerElement
  constructor() {
    this.videos = [];
    this.limit = 12;
    this.hasVideos = true
   }

  ngOnInit() {
    this.videos = this.data.splice(0, this.limit);
  }

  isEven(i: number) {
    return i  % 2 === 1;
  }

  loadMoreVideos() {
    this.scrollHandler(null);
  }

  hasMoreVideos() {
    return this.hasVideos;
  }

  scrollHandler(e) {
    let spliced = this.data.splice(0, this.limit);
    this.videos = this.videos.concat(spliced);

    if (this.data.length === 0) {
      this.hasVideos = false;
    }
  }
}
