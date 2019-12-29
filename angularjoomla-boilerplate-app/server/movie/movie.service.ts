import { Injectable, HttpService } from "@nestjs/common";
import { ServerSettings } from '../config/server.config';
import { MovieRestConfig } from '../config/rest.config';
import { URLSearchParams } from 'url';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { Movie } from "../interfaces/movie.interface";

@Injectable()
export class MovieService {
    private url;
    private serverSettings;
    private restConfig;

    constructor(private readonly http: HttpService) {
        this.serverSettings = ServerSettings;
        this.restConfig = MovieRestConfig;
        this.url = this.serverSettings.host + this.serverSettings.path;
    }

    /**
     * Gets all movies
     */
    getMovieAll(): Observable<Movie[]> {
        const params = new URLSearchParams(this.restConfig.movieMain.query);
        const reqUrl = this.url + '?' + params.toString();

        return this.http.get(reqUrl)
            .pipe(
                map(response => response.data)
            );
    }

    /**
     * Gets all movies for a category
     * @param id Category Id
     * @param itemid Menu Id
     */
    getMovies(id: number, itemid: number):Observable<Movie[]> {
        let params =  new URLSearchParams(this.restConfig.movieCategory.query);
        params.append('id', id.toString());
        params.append('Itemid', itemid.toString());

        const reqUrl = this.url + '?' + params.toString();

        return this.http.get(reqUrl)
            .pipe(
                map(response => response.data)
            );
    }

    /**
     * Gets random array of movies
     * @param limit Limit how many random movies to return
     */
    getRandomMovies(limit: number):Observable<Movie[]> {
        let params =  new URLSearchParams(this.restConfig.movieRandom.query);
        params.append('limit', limit.toString());

        const reqUrl = this.url + '?' + params.toString();

        return this.http.get(reqUrl)
            .pipe(
                map(response => response.data)
            );
    }

    /**
     * Gets a single movie
     * @param id Movie Id
     * @param catid Category Id
     * @param itemid Menu Item Id
     */
    getMovie(id: number, catid: number, itemid: number):Observable<Movie> {
        let params =  new URLSearchParams(this.restConfig.movie.query);
        params.append('id', id.toString());
        params.append('catid', catid.toString());
        params.append('Itemid', itemid.toString());

        const reqUrl = this.url + '?' + params.toString();

        return this.http.get(reqUrl)
            .pipe(
                map(response => response.data)
            );
    }

    /**
     * Gets popular movies
     * @param limit Limit number of movies to return
     */
    getPopularMovies(limit: number):Observable<Movie[]> {
        let params =  new URLSearchParams(this.restConfig.moviePopular.query);
        params.append('limit', limit.toString());

        const reqUrl = this.url + '?' + params.toString();

        return this.http.get(reqUrl)
            .pipe(
                map(response => response.data)
            );
    }
}