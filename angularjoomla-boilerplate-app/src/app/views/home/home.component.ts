import { Component, OnInit } from '@angular/core';
import { VgAPI } from 'videogular2/compiled/core';
// import GalleryState from 'src/app/store/gallery/gallery.state';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Collection } from '../../store/gallery/gallery.model';
import { map } from 'rxjs/operators';
import * as fromApp from '../../store/app.reducers';
import * as GalleryActions from '../../store/gallery/gallery.actions';
import * as MovieActions from '../../store/movie/movie.actions';
import * as ArticleActions from '../../store/article/article.actions';
import GalleryState from '../../store/gallery/gallery.state';
import MovieState from '../../store/movie/movie.state';
import ArticleState from '../../store/article/article.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public preload:string = 'auto';
  // public api: VgAPI;
  // public video = {
  //   src: '/assets/videos/Utada_Hikaru_Deep_River.mp4'
  // };
  private gallery$: Observable<GalleryState>;
  private gallerySubscription: Subscription;
  private movie$: Observable<MovieState>;
  private movieSubscription: Subscription;
  private blog$: Observable<ArticleState>;
  private blogSubscription: Subscription;

  constructor(private store: Store<{gallery: GalleryState}>) {
    this.gallery$ = this.store.pipe(select('gallery'));
    this.store.dispatch(GalleryActions.GetCollectionsAllAction());
    // this.movie$ = this.store.pipe(select('movie'));
    this.store.dispatch(MovieActions.GetMoviesAllAction());
    // this.blog$ = this.store.pipe(select('blog'));
    this.store.dispatch(ArticleActions.GetArticlesAllAction());
  }

  ngOnInit() {
    console.log('Initializing...');
    
    this.gallerySubscription = this.gallery$.pipe(map((data) => {
      console.log('data: ', data);
      
    }))
    .subscribe();
    
    this.store.dispatch(GalleryActions.GetCollectionsRandomAction({ payload: 10 }));
    this.store.dispatch(GalleryActions.GetCollectionsLatestAction({ payload: 6 }));
  }

  onPlayerReady(api: VgAPI) {
    // this.api = api;
  }

  ngOnDestroy(): void {
    this.gallerySubscription.unsubscribe();
    
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
