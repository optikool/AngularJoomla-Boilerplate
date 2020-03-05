import * as GalleryActions from './gallery.actions';
import GalleryState, { initialState } from './gallery.state';
import { createReducer, on, Action } from '@ngrx/store';

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
    on(GalleryActions.GetCollectionsLatestAction, (state: GalleryState) => {
        return {
            ...state,
            LatestCollections: state.Collections.slice(0, state.LatestCollectionLimit)
        }
    }),
    on(GalleryActions.SetCollectionsLatestLimitAction, (state: GalleryState, { payload }) => {
        return {
            ...state,
            LatestCollectionLimit: payload
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
        return {
            ...state,
            GalleryError: error
        };
    })
);

export function GalleryReducer(state: GalleryState | undefined, action: Action) {
  return reducer(state, action);
};
