import { Movie, MovieCategory } from './movie.model';

export default class MovieState {
    Movie: Movie;
    Movies: Array<Movie>;
    LatestMovies: Array<Movie>;
    LatestMoviesLimit: number;
    RandomMovies: Array<Movie>;
    MoiveCategory: MovieCategory;
    MovieError: Error
}

export const initialState = (): MovieState => {
    return {
        Movie: {
            id: null,
            title: '',
            alias: '',
            catid: null,
            thumb: '',
            link: '',
            time: null,
            access: null,
            hits: null,
            state: null,
            submitter: '',
            displayDate: null,
            intro: '',
            catalias: '',
            cattitle: '',
            itemId: null,
            catido: null,
            catidoa: '',
            imgThumb: '',
            tags: []
        },
        Movies: Array<Movie>(),
        LatestMovies: Array<Movie>(),
        LatestMoviesLimit: 10,
        RandomMovies: Array<Movie>(),
        MoiveCategory: {
            id: null,
            parent_id: null,
            level: null,
            path: '',
            extension: '',
            title: '',
            alias: '',
            description: '',
            access: null,
            params: null,
            metadesc: null,
            metakey: null,
            metadata: null
        },
        MovieError: null
    };
};