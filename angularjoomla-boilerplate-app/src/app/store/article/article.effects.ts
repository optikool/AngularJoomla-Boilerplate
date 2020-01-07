import { Injectable } from "@angular/core";
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { ArticleActionsTypes }  from './article.actions';
import { mergeMap, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Article } from './article.model';
import { ArticleService } from '../../services/article.service';


@Injectable()
export class ArticleEffect {
    constructor(private action$: Actions, private http: HttpClient, private articleService: ArticleService) {}

    @Effect()
    getArticleAll = this.action$
        .pipe(
            ofType(ArticleActionsTypes.GET_ARTICLES_ALL),
            switchMap(() => {
                return this.articleService.getArticleDataAll(0);
            }),
            mergeMap((data) => {
                return [{
                    type: ArticleActionsTypes.SET_ARTICLES_ALL,
                    payload: data
                },{
                    type: ArticleActionsTypes.SET_ARTICLES_LATEST,
                    payload: 10
                }];
            })
        );

    @Effect()
    getArticleRandom = this.action$
        .pipe(
            ofType(ArticleActionsTypes.GET_ARTICLES_LATEST),
            switchMap((props: {payload: number, type: string}) => {
                return this.articleService.getArticleRandomData(props.payload)
            }),
            mergeMap((data) => {
                return [
                    {
                        type: ArticleActionsTypes.SET_ARTICLES_RANDOM,
                        payload: data
                    }
                ]

            })
        );
}