import * as ArticleActions from './article.actions';
import ArticleState, { initialState } from './article.state';
import { createReducer, on, Action } from '@ngrx/store';
import { Article } from './article.model';

export const featureKey = 'blog';
export const initialstate = initialState();

const reducer = createReducer(
    initialstate,
    on(ArticleActions.GetArticlesAllAction, (state: ArticleState) => {
        return {
            ...state
        }
    }),
    on(ArticleActions.SetArticlesAllAction, (state, { payload }) => {
        return {
            ...state,
            Articles: payload
        }
    }),
    on(ArticleActions.GetArticlesLatestAction, (state: ArticleState, { payload }) => {
        return {
            ...state,
            LatestArticles: state.Articles.slice(0, payload)
        }
    }),
    on(ArticleActions.SetArticlesLatestAction, (state: ArticleState, { payload }) => {
        return {
            ...state,
            LatestArticles: state.Articles.slice(0, payload)
        }
    }),
    on(ArticleActions.GetArticlesRandomAction, (state) => {
        return {
            ...state
        }
    }),
    on(ArticleActions.SetArticlesRandomAction, (state, { payload }) => {
        return {
            ...state,
            RandomArticles: payload
        }
    }),
    on(ArticleActions.ErrorArticlesAction, (state: ArticleState, error: Error) => {
        console.log('Error occured: ', error);
        return {
            ...state,
            ArticleError: error
        };
    })
);

export function ArticleReducer(state: ArticleState | undefined, action: Action) {
  return reducer(state, action);
};
