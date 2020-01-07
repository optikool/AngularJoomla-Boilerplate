import { createAction, props } from "@ngrx/store";
import { Collection } from './gallery.model';

export enum GalleryActionsTypes {
    GET_COLLECTIONS_ALL = 'GET_COLLECTIONS_ALL',
    SET_COLLECTION_ALL = 'SET_COLLECTION_ALL',
    GET_COLLECTIONS_LATEST = 'GET_COLLECTIONS_LATEST',
    SET_COLLECTIONS_LATEST = 'SET_COLLECTIONS_LATEST',
    GET_COLLECTIONS_RANDOM = 'GET_COLLECTIONS_RANDOM',
    SET_COLLECTIONS_RANDOM = 'SET_COLLECTIONS_RANDOM',
    GET_COLLECTIONS_ERROR = 'GET_COLLECTIONS_ERROR'
}

export const GetCollectionsAllAction = createAction(
    GalleryActionsTypes.GET_COLLECTIONS_ALL,
);

export const SetCollectionsAllAction = createAction(
    GalleryActionsTypes.SET_COLLECTION_ALL,
    props<{ payload: Array<Collection> }>()
);

export const GetCollectionsLatestAction = createAction(
    GalleryActionsTypes.GET_COLLECTIONS_LATEST,
    props<{ payload: number }>()
);

export const SetCollectionsLatestAction = createAction(
    GalleryActionsTypes.SET_COLLECTIONS_LATEST,
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
