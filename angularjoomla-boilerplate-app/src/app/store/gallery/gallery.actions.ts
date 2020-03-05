import { createAction, props } from "@ngrx/store";
import { Collection } from './gallery.model';

export enum GalleryActionsTypes {
    GET_COLLECTIONS_ALL = '[Gallery] Get Collections All',
    SET_COLLECTION_ALL = '[Gallery] Set Collections All',
    GET_COLLECTIONS_LATEST = '[Gallery] Get Collections',
    SET_COLLECTIONS_LATEST_LIMIT = '[Gallery] Set Collections Latest Limit',
    GET_COLLECTIONS_RANDOM = '[Gallery] Get Collections Random',
    SET_COLLECTIONS_RANDOM = '[Gallery] Set Collections Random',
    GET_COLLECTIONS_ERROR = '[Gallery] Get Collections Error'
}

export const GetCollectionsAllAction = createAction(
    GalleryActionsTypes.GET_COLLECTIONS_ALL
);

export const SetCollectionsAllAction = createAction(
    GalleryActionsTypes.SET_COLLECTION_ALL,
    props<{ payload: Array<Collection> }>()
);

export const GetCollectionsLatestAction = createAction(
    GalleryActionsTypes.GET_COLLECTIONS_LATEST
);

export const SetCollectionsLatestLimitAction = createAction(
    GalleryActionsTypes.SET_COLLECTIONS_LATEST_LIMIT,
    props<{ payload: number }>()
);

export const GetCollectionsRandomAction = createAction(
    GalleryActionsTypes.GET_COLLECTIONS_RANDOM,
    props<{ payload: number }>()
);

export const SetCollectionsRandomAction = createAction(
    GalleryActionsTypes.SET_COLLECTIONS_RANDOM,
    props<{ payload: Array<Collection> }>()
);

export const ErrorCollectionsAction = createAction(
    GalleryActionsTypes.GET_COLLECTIONS_ERROR, 
    props<Error>()
);
