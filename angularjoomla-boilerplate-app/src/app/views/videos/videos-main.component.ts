import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'jma-videos-main',
  templateUrl: './videos-main.component.html',
  styleUrls: ['./videos-main.component.scss']
})
export class VideosMainComponent implements OnInit {
  teaserInfoReady: boolean;
  videoDataReady: boolean;
  videosRandomReady: boolean;
  teaserData: any;
  videoDataPromise: any;
  videosRandom: Array<any>;
  videoData: Array<any>;

  constructor(private route: ActivatedRoute) {
    this.teaserInfoReady = false;
    this.videoDataReady = false;
    this.videosRandomReady = false;
    this.videoDataPromise = null;
    this.videoData = [];
    this.videoData = [];
    this.teaserData = {};
   }

  ngOnInit() {
    this.teaserData.title = 'Videos';
    this.teaserData.category = '';
    this.teaserInfoReady = true;

    this.route.paramMap.subscribe((params) => {
      this.getRecentMovieData();
      this.getFooterTeasers();
    });
  }

  getRecentMovieData() {
    let that = this;
    const limit: number = 40;

    // this.videoDataPromise = this.http.getMovieData(limit)
    // .subscribe((data) => {
    //   // that.videoData = data;
    //   that.videoDataReady = true;
    // });
  }

  getFooterTeasers() {
    let that = this;
    let videosRandom: Array<any> = [];

    // const combined = Observable.forkJoin(
    //   this.http.getGalleryRandomData(1),
    //   this.http.getMovieRandomData(2)
    // );

    // combined.subscribe(latestValues => {
    //   const [ collections , video ] = latestValues;

    //   const combinedCollections = Observable.forkJoin(
    //     this.http.getGalleryCollection(collections[0].id, collections[0].catid, collections[0].itemId)
    //   );

    //   combinedCollections.subscribe(collectionResult => {
    //     video[0].type = 'video';
    //     video[0].grid = 'grid_4';
    //     videosRandom.push(video[0]);

    //     collectionResult[0].type = 'collection';
    //     collectionResult[0].grid = 'grid_4';
    //     videosRandom.push(collectionResult[0]);

    //     video[1].type = 'video';
    //     video[1].grid = 'grid_4';
    //     videosRandom.push(video[1]);

    //     that.videosRandom = videosRandom;
    //     that.videosRandomReady = true;
    //   });
    // });
  }
}
