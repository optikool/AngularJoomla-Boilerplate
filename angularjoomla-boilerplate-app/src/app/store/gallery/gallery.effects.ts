import { Injectable } from "@angular/core";
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { GalleryActionsTypes }  from './gallery.actions';
import { mergeMap, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Collection } from './gallery.model';
import { GalleryService } from '../../services/gallery.service';


@Injectable()
export class GalleryEffect {
    constructor(private action$: Actions, private http: HttpClient, private galleryService: GalleryService) {}

//     GetToDos$: Observable<Action> = createEffect(() =>
//     this.action$.pipe(
//       ofType(ToDoActions.BeginGetToDoAction),
//       mergeMap(action =>
//         this.http.get(this.ApiURL).pipe(
//           map((data: ToDo[]) => {
//             return ToDoActions.SuccessGetToDoAction({ payload: data });
//           }),
//           catchError((error: Error) => {
//             return of(ToDoActions.ErrorToDoAction(error));
//           })
//         )
//       )
//     )
//   );

    // GetCollectionsAll$: Observable<Action> = createEffect(() => 
    //     this.action$.pipe(
    //         ofType(GalleryActions.GET_COLLECTIONS_ALL),
    //         mergeMap(action => 
    //             this.http.get('http://localhost:4200/api/gallery/all').pipe(
    //                 map((results: Collection[]) => {
    //                     console.log('Effect getCollectionAll http results: ', results);
    //                     GalleryActions.SetCollectionsAllAction({ payload: results});
    //                 }),
    //                 catchError((error: Error) => {
    //                     console.log('Error occured: ', error);
    //                     return of(GalleryActions.ErrorCollectionsAction(error));
    //                 })
    //             )
    //         )
    //     )
    // );

    // GetCollectionRandom$: Observable<Action> = createEffect(() => this.actions$.pipe(
    //     ofType(GalleryActions.GET_COLLECTIONS_RANDOM),
    //     mergeMap((action) => {
    //         return this.http.get<any>('http://localhost:4200/api/gallery/all')
    //             .pipe(map((results) => {
    //                 console.log('Effect getCollectionAll http results: ', results);
    //                 return results;
    //             }),
    //             catchError((error: Error) => {
    //                 console.log('Error occured: ', error);
    //                 return of(GalleryActions.ErrorCollectionsAction(error));
    //             }));
    //     })
    // ));

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
                    type: GalleryActionsTypes.SET_COLLECTIONS_LATEST,
                    payload: 10
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