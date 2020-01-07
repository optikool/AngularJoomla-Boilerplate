import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private host: string;

  constructor(private http: HttpClient) {
    this.host = 'http://localhost:4200/api';
  }

  getMovieData(limit: number) {
    const listLimit: string = (limit <= 0) ? 'all' : limit.toString();

    return this.http.get(`${this.host}/movies/${listLimit}`);
  }

  getMovieLatestData(limit: number) {
    return this.http.get(`${this.host}/movies/main/${limit}`);
  }

  getMoviePopularData(limit: number) {
    return this.http.get(`${this.host}/movies/main/popular/${limit}`);
  }

  getMovieRandomData(limit: number) {
    return this.http.get(`${this.host}/movies/main/random/${limit}`);
  }

  getMovieLatestCategoryData(catid: number, itemid: number) {
    return this.http.get(`${this.host}/movies/category/${catid}/${itemid}`);
  }

  getMoviePopularCategoryData(limit: number) {
    return this.http.get(`${this.host}/movies/main/random/${limit}`);
  }

  getMovieRandomCategoryData(limit: number) {
    return this.http.get(`${this.host}/movies/main/random/${limit}`);
  }

  getMovieCollection(id: number, catid: number, itemid: number) {
    return this.http.get(`${this.host}/movies/single/${id}/${catid}/${itemid}`);
  }

  getMovieLatestSingleData(limit: number) {
    return this.http.get(`${this.host}/movies/main/random/${limit}`);
  }

  getMoviePopularSingleData(limit: number) {
    return this.http.get(`${this.host}/movies/main/random/${limit}`);
  }

  getMovieRandomSingleData(limit: number) {
    return this.http.get(`${this.host}/movies/main/random/${limit}`);
  }
}
