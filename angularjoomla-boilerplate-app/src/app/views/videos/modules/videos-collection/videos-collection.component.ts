import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jma-videos-collection',
  templateUrl: './videos-collection.component.html',
  styleUrls: ['./videos-collection.component.scss']
})
export class VideosCollectionComponent implements OnInit {
 @Input() public data: any;
 @Input() public cClass: string;
 //  | outerElement | ellipsisFormatter:27
 videoData: any;

  constructor() {
    this.videoData = {};
   }

  ngOnInit() {
    this.videoData = this.data;
  }

}
