import { Injectable } from "@angular/core";
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { MovieActionsTypes }  from './movie.actions';
import { mergeMap, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Movie } from './movie.model';
import { MovieService } from '../../services/movie.service';


@Injectable()
export class MovieEffect {
    constructor(private action$: Actions, private http: HttpClient, private movieService: MovieService) {}

    @Effect()
    getMovieAll = this.action$
        .pipe(
            ofType(MovieActionsTypes.GET_MOVIES_ALL),
            switchMap(() => {
                return this.movieService.getMovieData(0);
            }),
            mergeMap((data) => {
                return [{
                    type: MovieActionsTypes.SET_MOVIES_ALL,
                    payload: data
                },{
                    type: MovieActionsTypes.SET_MOVIES_LATEST,
                    payload: 10
                }];
            })
        );

    @Effect()
    getMovieRandom = this.action$
        .pipe(
            ofType(MovieActionsTypes.GET_MOVIES_RANDOM),
            switchMap((props: {payload: number, type: string}) => {
                return this.movieService.getMovieRandomData(props.payload)
            }),
            mergeMap((data) => {
                return [
                    {
                        type: MovieActionsTypes.SET_MOVIES_RANDOM,
                        payload: data
                    }
                ]

            })
        );
}