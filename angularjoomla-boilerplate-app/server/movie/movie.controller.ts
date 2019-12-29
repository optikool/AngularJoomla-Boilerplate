import { Controller, Get, Param } from "@nestjs/common";
import { MovieService } from './movie.service';
import { Observable } from "rxjs";
import { Movie } from "../interfaces/movie.interface";

@Controller('movies')
export class MovieController {
    constructor(private movieService: MovieService) {}

    @Get('all')
    getMovieAll():Observable<Movie[]> {
        return this.movieService.getMovieAll();
    }

    @Get('category/:id/:itemid')
    getMovies(@Param() params):Observable<Movie[]> {
        return this.movieService.getMovies(Number.parseInt(params.id), Number.parseInt(params.itemid));
    }

    @Get('random/:limit')
    getRandomMovies(@Param() params):Observable<Movie[]> {
        return this.movieService.getRandomMovies(Number.parseInt(params.limit));
    }

    @Get('single/:id/:catid/:itemid')
    getMovie(@Param() params):Observable<Movie> {
        return this.movieService.getMovie(Number.parseInt(params.id), Number.parseInt(params.catid), Number.parseInt(params.itemid));
    }

    @Get('popular/:limit')
    getPopularMovies(@Param() params):Observable<Movie[]> {
        return this.movieService.getPopularMovies(Number.parseInt(params.limit));
    }
}
