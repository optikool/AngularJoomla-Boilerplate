import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private host: string;

  constructor(private http: HttpClient) {
    this.host = 'http://localhost:4200/api';
  }

  getArticleDataAll(limit: number) {
    const listLimit: string = (limit <= 0) ? 'all' : limit.toString();

    return this.http.get(`${this.host}/blog/${listLimit}`);
  }

  getArticleData(id: number) {
    return this.http.get(`${this.host}/blog/${id}`);
  }

  getArticleLatestData(limit: number) {
    return this.http.get(`${this.host}/blog/main/${limit}`);
  }

  getArticlePopularData(limit: number) {
    return this.http.get(`${this.host}/movies/main/popular/${limit}`);
  }

  getArticleRandomData(limit: number) {
    return this.http.get(`${this.host}/movies/main/random/${limit}`);
  }
}
