import { createAction, props } from "@ngrx/store";
import { Article } from './article.model';

export enum ArticleActionsTypes {
    GET_ARTICLES_ALL = 'GET_ARTICLES_ALL',
    SET_ARTICLES_ALL = 'SET_ARTICLES_ALL',
    GET_ARTICLES_LATEST = 'GET_ARTICLES_LATEST',
    SET_ARTICLES_LATEST = 'SET_ARTICLES_LATEST',
    GET_ARTICLES_RANDOM = 'GET_ARTICLES_RANDOM',
    SET_ARTICLES_RANDOM = 'SET_ARTICLES_RANDOM',
    GET_ARTICLES_ERROR = 'GET_ARTICLES_ERROR'
}

export const GetArticlesAllAction = createAction(
    ArticleActionsTypes.GET_ARTICLES_ALL,
);

export const SetArticlesAllAction = createAction(
    ArticleActionsTypes.SET_ARTICLES_ALL,
    props<{ payload: Array<Article> }>()
);

export const GetArticlesLatestAction = createAction(
    ArticleActionsTypes.GET_ARTICLES_LATEST,
    props<{ payload: number }>()
);

export const SetArticlesLatestAction = createAction(
    ArticleActionsTypes.SET_ARTICLES_LATEST,
    props<{ payload: number }>()
);

export const GetArticlesRandomAction = createAction(
    ArticleActionsTypes.GET_ARTICLES_RANDOM,
    props<{ payload: number }>()
);

export const SetArticlesRandomAction = createAction(
    ArticleActionsTypes.SET_ARTICLES_RANDOM,
    props<{ payload: Array<Article> }>()
);

export const ErrorArticlesAction = createAction(
    ArticleActionsTypes.GET_ARTICLES_ERROR, 
    props<Error>()
);
