import { createAction, props } from "@ngrx/store";
import { Movie } from './movie.model';

export enum MovieActionsTypes {
    GET_MOVIES_ALL = '[MOVIES] Get Movies All',
    SET_MOVIES_ALL = '[MOVIES] Set Movies All',
    GET_MOVIES_LATEST = '[MOVIES] Get Movies Latest',
    SET_MOVIES_LATEST = '[MOVIES] Set Movies Latest',
    SET_MOVIES_LATEST_LIMIT = '[MOVIES] Set Movies Latest Limit',
    GET_MOVIES_RANDOM = '[MOVIES] Get Movies Random',
    SET_MOVIES_RANDOM = '[MOVIES] Set Movies Random',
    GET_MOVIES_ERROR = '[MOVIES] Get Movies Error'
}

export const GetMoviesAllAction = createAction(
    MovieActionsTypes.GET_MOVIES_ALL,
);

export const SetMoviesAllAction = createAction(
    MovieActionsTypes.SET_MOVIES_ALL,
    props<{ payload: Array<Movie> }>()
);

export const GetMoviesLatestAction = createAction(
    MovieActionsTypes.GET_MOVIES_LATEST
);

export const SetMoviesLatestLimitAction = createAction(
    MovieActionsTypes.SET_MOVIES_LATEST_LIMIT,
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