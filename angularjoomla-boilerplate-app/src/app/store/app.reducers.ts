import { ActionReducerMap } from '@ngrx/store';
import * as fromGalleryReducer from './gallery/gallery.reducers';
import * as fromMovieReducer from './movie/movie.reducers';
import * as fromArticleReducer from './article/article.reducers';
import { InjectionToken } from '@angular/core';
import GalleryState from './gallery/gallery.state';
import MovieState from './movie/movie.state';
import ArticleState from './article/article.state';

export const appFeatureKey = 'app';

export interface AppState {
    [fromGalleryReducer.featureKey]: GalleryState,
    [fromMovieReducer.featureKey]: MovieState,
    [fromArticleReducer.featureKey]: ArticleState,
}

export const reducers = new InjectionToken<ActionReducerMap<AppState>>(appFeatureKey, {
    factory: () => ({
      [fromGalleryReducer.featureKey]: fromGalleryReducer.GalleryReducer,
      [fromMovieReducer.featureKey]: fromMovieReducer.MovieReducer,
      [fromArticleReducer.featureKey]: fromArticleReducer.ArticleReducer
    })
  });


