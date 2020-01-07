import * as GalleryActions from './gallery.actions';
import GalleryState, { initialState } from './gallery.state';
import { createReducer, on, Action } from '@ngrx/store';
import { Collection } from './gallery.model';

export const featureKey = 'gallery';
export const initialstate = initialState();

const reducer = createReducer(
    initialstate,
    on(GalleryActions.GetCollectionsAllAction, (state: GalleryState) => {
        return {
            ...state
        }
    }),
    on(GalleryActions.SetCollectionsAllAction, (state, { payload }) => {
        return {
            ...state,
            Collections: payload
        }
    }),
    on(GalleryActions.GetCollectionsLatestAction, (state: GalleryState, { payload }) => {
        return {
            ...state,
            LatestCollections: state.Collections.slice(0, payload)
        }
    }),
    on(GalleryActions.SetCollectionsLatestAction, (state: GalleryState, { payload }) => {
        return {
            ...state,
            LatestCollections: state.Collections.slice(0, payload)
        }
    }),
    on(GalleryActions.GetCollectionsRandomAction, (state) => {
        return {
            ...state
        }
    }),
    on(GalleryActions.SetCollectionsRandomAction, (state, { payload }) => {
        return {
            ...state,
            RandomCollections: payload
        }
    }),
    on(GalleryActions.ErrorCollectionsAction, (state: GalleryState, error: Error) => {
        console.log('Error occured: ', error);
        return {
            ...state,
            GalleryError: error
        };
    })
);

export function GalleryReducer(state: GalleryState | undefined, action: Action) {
  return reducer(state, action);
};
