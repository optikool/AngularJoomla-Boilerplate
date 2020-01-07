import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpService } from '../../services/http.service';
// import { EmbedVideoService } from 'ngx-embed-video/dist';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'jma-videos-single',
  templateUrl: './videos-single.component.html',
  styleUrls: ['./videos-single.component.scss'],
  providers: [DatePipe]
})
export class VideosSingleComponent implements OnInit {
  private id: number;
  private cid: number;
  private itemId: number;
  private movieWidth: number;
  private movieHeight: number;
  movieDataReady: boolean;
  teaserInfoReady: boolean;
  videosRandomReady: boolean;
  movieInfo: any;
  videosRandom: Array<any>;
  socialLinks: Array<number>;
  streamLinks: Array<number>;

  constructor(
    private http: HttpService, 
    private route: ActivatedRoute,
    // private embedService: EmbedVideoService,
    private sanitizer: DomSanitizer) {
      this.id = null;
      this.cid = null;
      this.itemId = null;
      this.movieDataReady = false;
      this.teaserInfoReady = false;
      this.videosRandomReady = false;
      this.movieInfo = {};
      this.socialLinks = [1, 2, 3, 6, 7];
      this.streamLinks = [30, 31];
      this.movieWidth = 626;
      this.movieHeight = 352; // 386
      this.videosRandom = [];
     }

  ngOnInit() {
    let that = this;
    this.route.paramMap.subscribe((params) => {
      that.id = parseInt(params.get('id'));
      that.cid = parseInt(params.get('cid'));
      that.itemId = parseInt(params.get('itemId'));

      this.getVideoData();
      this.getFooterTeasers();
    });
  }

  getVideoData() {
    this.http.getMovieVideo(this.id, this.cid, this.itemId)
      .subscribe((data) => {
        this.movieInfo = data;
        this.movieInfo.link = this.formatLink(this.movieInfo.link, this.movieInfo.type);
        this.teaserInfoReady = true;
        this.movieDataReady = true;

        if(this.getType('social')) {
          const embedSocial = this.getEmbedCode(this.movieInfo.link);
          this.movieInfo.embedIframe = this.sanitizer.bypassSecurityTrustHtml(embedSocial);
        }

        this.movieInfo.videoType = 'video/mp4';
      });
  }

  getEmbedCode(url: string) {
    return ''; // this.embedService.embed(url, {query: { portrait: 0}, attr: { width: this.movieWidth, height: this.movieHeight }});
  }

  getType(type: string) {
    switch(type) {
      case 'social':
        return this.socialLinks.includes(+this.movieInfo.type);
      case 'stream':
        return this.streamLinks.includes(+this.movieInfo.type);
      case 'media':
        return !this.socialLinks.includes(+this.movieInfo.type) && !this.streamLinks.includes(+this.movieInfo.type);
    }
    
    return false;
  }

  formatLink(link: string, type: string) {
    switch(type) {
      case '1':
        return this.formatYoutubeLink(link);
      default:
        return link;
    }
  }

  formatYoutubeLink(link: string) {
    let url = new URL('https:' + link);
    let id = url.pathname.substr(7);

    return 'https://' + url.hostname + '/watch?v=' + id;
  }

  getFooterTeasers() {
    let that = this;
    let videosRandom: Array<any> = [];

  //   const combined = Observable.forkJoin(
  //     this.http.getMovieRandomData(3)
  //   );

  //   combined.subscribe(videoResult => {
  //     videoResult[0][0].type = 'video';
  //     videoResult[0][0].grid = 'grid_4';
  //     videosRandom.push(videoResult[0][0]);

  //     videoResult[0][1].type = 'video';
  //     videoResult[0][1].grid = 'grid_4';
  //     videosRandom.push(videoResult[0][1]);

  //     videoResult[0][2].type = 'video';
  //     videoResult[0][2].grid = 'grid_4';
  //     videosRandom.push(videoResult[0][2]);

  //     that.videosRandom = videosRandom;
  //     that.videosRandomReady = true;
  //   });

  // <p *ngIf="getType('stream')">
  //                   <vg-player>
  //                       <video #media [vgHls]="movieInfo.link" (onGetBitrates)="hlsBitrates = $event" id="singleVideo" type="video/mp4" controls>
  //                       </video>
  //                   </vg-player>
  //               </p>
  //               <p *ngIf="getType('media')">
  //                   <vg-player>
  //                       <vg-overlay-play></vg-overlay-play>
  //                       <vg-buffering></vg-buffering>

  //                       <vg-scrub-bar>
  //                           <vg-scrub-bar-current-time></vg-scrub-bar-current-time>
  //                           <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>
  //                       </vg-scrub-bar>

  //                       <vg-controls vg-autohide="true" vg-autohide-time="2000">
  //                           <vg-play-pause></vg-play-pause>
  //                           <vg-playback-button></vg-playback-button>

  //                           <vg-time-display vgProperty="current" vgFormat="mm:ss"></vg-time-display>

  //                           <vg-scrub-bar style="pointer-events: none;"></vg-scrub-bar>

  //                           <vg-time-display vgProperty="left" vgFormat="mm:ss"></vg-time-display>
  //                           <vg-time-display vgProperty="total" vgFormat="mm:ss"></vg-time-display>

  //                           <vg-track-selector></vg-track-selector>
  //                           <vg-mute></vg-mute>
  //                           <vg-volume></vg-volume>

  //                           <vg-fullscreen></vg-fullscreen>
  //                       </vg-controls>

  //                       <video [vgMedia]="media" #media id="singleVideo" preload="auto" crossorigin>
  //                           <source [src]="movieInfo.link" type="{{movieInfo.videoType}}">
  //                       </video>
  //                   </vg-player>
  //               </p>
  }
}
