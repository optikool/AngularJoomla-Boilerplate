import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GalleryActionsTypes }  from './gallery.actions';
import { mergeMap, switchMap } from 'rxjs/operators';
import { GalleryService } from '../../services/gallery.service';


@Injectable()
export class GalleryEffect {
    constructor(
        private action$: Actions, 
        private galleryService: GalleryService
    ) {}

    @Effect()
    getCollectionAll = this.action$
        .pipe(
            ofType(GalleryActionsTypes.GET_COLLECTIONS_ALL),
            switchMap(() => {
                return this.galleryService.getGalleryData(0);
            }),
            mergeMap((data) => {
                return [{
                    type: GalleryActionsTypes.SET_COLLECTION_ALL,
                    payload: data
                },{
                    type: GalleryActionsTypes.GET_COLLECTIONS_LATEST
                }];
            })
        );

    @Effect()
    getCollectionRandom = this.action$
        .pipe(
            ofType(GalleryActionsTypes.GET_COLLECTIONS_RANDOM),
            switchMap((props: {payload: number, type: string}) => {
                return this.galleryService.getGalleryRandomData(props.payload)
            }),
            mergeMap((data) => {
                return [
                    {
                        type: GalleryActionsTypes.SET_COLLECTIONS_RANDOM,
                        payload: data
                    }
                ]

            })
        );
}