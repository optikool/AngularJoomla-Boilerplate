import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import GalleryState from '../../..//store/gallery/gallery.state';
import * as GalleryActions from '../../../store/gallery/gallery.actions';
import { Collection } from '../../..//store/gallery/gallery.model';
import * as fromApp from '../../../store/app.reducers';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-gallery-collections',
  templateUrl: './gallery-collections.component.html',
  styleUrls: ['./gallery-collections.component.less']
})
export class GalleryCollectionsComponent implements OnInit {
  @Input() public data: any;
  
  collections$: Observable<GalleryState>;
  private gallerySubscription: Subscription;
  galleries: Array<Collection>;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.store.dispatch(GalleryActions.SetCollectionsLatestLimitAction({ payload: this.data }));
    this.store.dispatch(GalleryActions.GetCollectionsLatestAction());
    this.gallerySubscription = this.store.select('gallery')
      .pipe(delay(0))
      .subscribe(
        data => {
          this.galleries = data.LatestCollections;       
        }
      );

    setTimeout(() => {
      this.store.dispatch(GalleryActions.SetCollectionsLatestLimitAction({ payload: 3 }));
      this.store.dispatch(GalleryActions.GetCollectionsLatestAction());
    }, 5000);
  }

  ngOnDestroy(): void {
    this.gallerySubscription.unsubscribe();
  }
}
