import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as GalleryActions from '../../../../store/gallery/gallery.actions';
import { Collection } from '../../../../store/gallery/gallery.model';
import * as fromApp from '../../../../store/app.reducers';
import { delay } from 'rxjs/operators';
import { 
  fancyCaptionLoadTrigger, 
  fancyCaptionBottomLoadTrigger, 
  fancyCaptionTopLoadTrigger  
} from '../../../../animations/fancy-caption.animation';

@Component({
  selector: 'app-fancy-caption-single',
  templateUrl: './fancy-caption-single.component.html',
  styleUrls: ['./fancy-caption-single.component.scss'],
  animations: [
    fancyCaptionLoadTrigger,
    fancyCaptionBottomLoadTrigger,
    fancyCaptionTopLoadTrigger
  ]
})
export class FancyCaptionSingleComponent implements OnInit {
  @Input() public limit: number;
  @Input() public columns: number;

  private gallerySubscription: Subscription;
  public galleries: Array<Collection> = [];

  constructor(private store: Store<fromApp.AppState>) {}

  handleIsActive(event: {state: string}, data: Collection) {
    data.isActive = event.state;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.store.dispatch(GalleryActions.SetCollectionsLatestLimitAction({ payload: this.limit }));
    this.store.dispatch(GalleryActions.GetCollectionsLatestAction());
    this.gallerySubscription = this.store.select('gallery')
      .pipe(delay(0))
      .subscribe(
        data => {
          this.galleries = data.LatestCollections.map((item) => {
            return {
              ...item,
              isActive: 'inactive'
            }
          });       
        }
      );
  }

  ngOnDestroy(): void {
    this.gallerySubscription.unsubscribe();
  }
}
