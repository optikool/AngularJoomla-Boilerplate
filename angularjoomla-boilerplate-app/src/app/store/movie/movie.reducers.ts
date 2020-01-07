import * as MovieActions from './movie.actions';
import MovieState, { initialState } from './movie.state';
import { createReducer, on, Action } from '@ngrx/store';
import { Movie } from './movie.model';

export const featureKey = 'movie';
export const initialstate = initialState();

const reducer = createReducer(
    initialstate,
    on(MovieActions.GetMoviesAllAction, (state: MovieState) => {
        return {
            ...state
        }
    }),
    on(MovieActions.SetMoviesAllAction, (state, { payload }) => {
        return {
            ...state,
            Movies: payload
        }
    }),
    on(MovieActions.GetMoviesLatestAction, (state: MovieState, { payload }) => {
        return {
            ...state,
            LatestMovies: state.Movies.slice(0, payload)
        }
    }),
    on(MovieActions.SetMoviesLatestAction, (state: MovieState, { payload }) => {
        return {
            ...state,
            LatestMovies: state.Movies.slice(0, payload)
        }
    }),
    on(MovieActions.GetMoviesRandomAction, (state) => {
        return {
            ...state
        }
    }),
    on(MovieActions.SetMoviesRandomAction, (state, { payload }) => {
        return {
            ...state,
            RandomMovies: payload
        }
    }),
    on(MovieActions.ErrorMoviesAction, (state: MovieState, error: Error) => {
        console.log('Error occured: ', error);
        return {
            ...state,
            MovieError: error
        };
    })
);

export function MovieReducer(state: MovieState | undefined, action: Action) {
  return reducer(state, action);
};
