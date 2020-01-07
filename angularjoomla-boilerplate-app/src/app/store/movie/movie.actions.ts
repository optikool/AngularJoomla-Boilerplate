import { createAction, props } from "@ngrx/store";
import { Movie } from './movie.model';

export enum MovieActionsTypes {
    GET_MOVIES_ALL = 'GET_MOVIES_ALL',
    SET_MOVIES_ALL = 'SET_MOVIES_ALL',
    GET_MOVIES_LATEST = 'GET_MOVIES_LATEST',
    SET_MOVIES_LATEST = 'SET_MOVIES_LATEST',
    GET_MOVIES_RANDOM = 'GET_MOVIES_RANDOM',
    SET_MOVIES_RANDOM = 'SET_MOVIES_RANDOM',
    GET_MOVIES_ERROR = 'GET_MOVIES_ERROR'
}

export const GetMoviesAllAction = createAction(
    MovieActionsTypes.GET_MOVIES_ALL,
);

export const SetMoviesAllAction = createAction(
    MovieActionsTypes.SET_MOVIES_ALL,
    props<{ payload: Array<Movie> }>()
);

export const GetMoviesLatestAction = createAction(
    MovieActionsTypes.GET_MOVIES_LATEST,
    props<{ payload: number }>()
);

export const SetMoviesLatestAction = createAction(
    MovieActionsTypes.SET_MOVIES_LATEST,
    props<{ payload: number }>()
);

export const GetMoviesRandomAction = createAction(
    MovieActionsTypes.GET_MOVIES_RANDOM,
    props<{ payload: number }>()
);

export const SetMoviesRandomAction = createAction(
    MovieActionsTypes.SET_MOVIES_RANDOM,
    props<{ payload: Array<Movie> }>()
);

export const ErrorMoviesAction = createAction(
    MovieActionsTypes.GET_MOVIES_ERROR,
    props<Error>()
);