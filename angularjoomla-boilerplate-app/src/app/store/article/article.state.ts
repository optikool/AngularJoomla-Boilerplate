import { Article } from './article.model';

export default class GalleryState {
    Article: Article;
    Articles: Array<Article>;
    LatestArticles: Array<Article>;
    RandomArticles: Array<Article>;
    ArticleError: Error
}

export const initialState = (): GalleryState => {
    return {
        Article: {
            id: null,
            title: '',
            alias: '',
            catid: null,
            access: null,
            hits: null,
            featured: null,
            state: null,
            author: '',
            displayDate: null,
            text: ''
        },
        Articles: Array<Article>(),
        LatestArticles: Array<Article>(),
        RandomArticles: Array<Article>(),
        ArticleError: null
    };
};