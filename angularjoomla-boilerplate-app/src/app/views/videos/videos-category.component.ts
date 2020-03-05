import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'jma-videos-category',
  templateUrl: './videos-category.component.html',
  styleUrls: ['./videos-category.component.scss']
})
export class VideosCategoryComponent implements OnInit {
  teaserInfoReady: boolean;
  videoDataReady: boolean;
  videosRandomReady: boolean;
  categoryDescription: string;
  videosRandom: Array<any>;
  teaserData: any;
  videoDataPromise: any;
  videoData: Array<any>;
  catid: number;
  itemid: number;

  constructor(private route: ActivatedRoute) {
    this.teaserInfoReady = false;
    this.videoDataReady = false;
    this.videosRandomReady = false;
    this.videoDataPromise = null;
    this.videoData = [];
    this.teaserData = {};
  }

  ngOnInit() {
    this.teaserData.title = '';
    this.teaserData.category = 'Videos';
    this.categoryDescription = '';

    this.getRouteParamsData();
    this.getFooterTeasers();
  }

  getRouteParamsData() {
    let that = this;

    this.route.paramMap.subscribe((params) => {
      that.catid = parseInt(params.get('cid'));
      that.itemid = parseInt(params.get('itemId'));
      that.videoDataReady = false;
      that.teaserInfoReady = false;
      this.getCategoryData();
    });
  }

  getCategoryData() {
    let that = this;

    // this.videoDataPromise = this.http.getMovieLatestCategoryData(this.catid, this.itemid)
    // .subscribe((data) => {
    //     // that.videoData = data.items;
    //     // that.teaserData.title = data.category.title;
    //     // that.categoryDescription = data.category.description;
    //     that.videoDataReady = true;
    //     that.teaserInfoReady = true;
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
