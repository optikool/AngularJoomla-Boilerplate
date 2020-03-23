import { Component, OnInit } from '@angular/core';
import { VgAPI } from 'videogular2/compiled/core';
import { Store } from '@ngrx/store';
import { Collection } from '../../store/gallery/gallery.model';
import * as fromApp from '../../store/app.reducers';
import * as GalleryActions from '../../store/gallery/gallery.actions';
import * as MovieActions from '../../store/movie/movie.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public preload:string = 'auto';
  public sliderWidgetData: Array<any> = [];
  public galleryCollection: Array<Collection>  = [];
  public galleryLatestLimit: number = 9;
  public movieLatestLimit: number = 6;
  public galleryColumns: number = 3;
  public movieColumns: number = 3;
  // public api: VgAPI;
  // public video = {
  //   src: '/assets/videos/Utada_Hikaru_Deep_River.mp4'
  // };

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.store.dispatch(GalleryActions.GetCollectionsAllAction());
    this.store.dispatch(MovieActions.GetMoviesAllAction());
  }

  onPlayerReady(api: VgAPI) {
    // this.api = api;
  }

  ngOnDestroy(): void {
  }
}

// <vg-player (onPlayerReady)="onPlayerReady($event)">
//             <vg-overlay-play></vg-overlay-play>
//             <vg-buffering></vg-buffering>
        
//             <vg-scrub-bar>
//                 <vg-scrub-bar-current-time></vg-scrub-bar-current-time>
//                 <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>
//             </vg-scrub-bar>
        
//             <vg-controls>
//                 <vg-play-pause></vg-play-pause>
//                 <vg-playback-button></vg-playback-button>
        
//                 <vg-time-display vgProperty="current" vgFormat="mm:ss"></vg-time-display>
        
//                 <vg-scrub-bar style="pointer-events: none;"></vg-scrub-bar>
        
//                 <vg-time-display vgProperty="left" vgFormat="mm:ss"></vg-time-display>
//                 <vg-time-display vgProperty="total" vgFormat="mm:ss"></vg-time-display>
        
//                 <vg-track-selector></vg-track-selector>
//                 <vg-mute></vg-mute>
//                 <vg-volume></vg-volume>
        
//                 <vg-fullscreen></vg-fullscreen>
//             </vg-controls>
//         <video [vgMedia]="media" #media id="singleVideo">
//             <source [src]="video.src" type="video/mp4">
//         </video>
//     </vg-player>
