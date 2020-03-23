import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../../../../store/movie/movie.model';
import * as MovieActions from '../../../../store/movie/movie.actions';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../store/app.reducers';
import { delay } from 'rxjs/operators';
import { 
  fancyCaptionLoadTrigger, 
  fancyCaptionBottomLoadTrigger, 
  fancyCaptionTopLoadTrigger  
} from '../../../../animations/fancy-caption.animation';

@Component({
  selector: 'app-fancy-caption-movie',
  templateUrl: './fancy-caption-movie.component.html',
  styleUrls: ['./fancy-caption-movie.component.scss'],
  animations: [
    fancyCaptionLoadTrigger,
    fancyCaptionBottomLoadTrigger,
    fancyCaptionTopLoadTrigger
  ]
})
export class FancyCaptionMovieComponent implements OnInit {
  @Input() public limit: number;
  @Input() public columns: number;

  private movieSubscription: Subscription;
  public movies: Array<Movie>;

  constructor(private store: Store<fromApp.AppState>) {}

  handleIsActive(event: {state: string}, data: Movie) {
    data.isActive = event.state;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.store.dispatch(MovieActions.SetMoviesLatestLimitAction({ payload: this.limit }));
    this.store.dispatch(MovieActions.GetMoviesLatestAction());
    this.movieSubscription = this.store.select('movie')
      .pipe(delay(0))
      .subscribe(
        data => {
          this.movies = data.LatestMovies.map((item) => {
            return {
              ...item,
              isActive: 'inactive'
            }
          });       
        }
      );
  }

  ngOnDestroy(): void {
    this.movieSubscription.unsubscribe();
  }
}
