import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class HttpService implements OnInit {
  private host: string;

  constructor(private http: HttpClient) {
    this.host = 'http://mdw.maesworld.com';
    // this.host = 'http://localhost:3021';
   }

  ngOnInit() {
    this.host = 'http://mdw.maesworld.com';
    // this.host = 'http://localhost:3021';
  }

  
  getFeatureData() {
    return this.http.get(this.host + '/service/home');
    //return this.http.get(this.host + '/service/home.json')
    //.map((response: Response) => response.json());
    //.catch(this.handleError);
  }

  getNewsFeedData(link: string) {
    return this.http.get('//api.rss2json.com/v1/api.json?callback=JSON_CALLBACK&rss_url=' + encodeURIComponent(link));
    //.map((response: Response) => response.json())
   // .catch(this.handleError);
  }

  getMovieData(limit: number) {
    return this.http.get(`${this.host}/service/movie/${limit}`);
    //.map((response: Response) => response.json())
   // .catch(this.handleError);
  }

  getMovieLatestData(limit: number) {
    return this.http.get(`${this.host}/service/movie/main/${limit}`);
    //.map((response: Response) => response.json())
   // .catch(this.handleError);
  }

  getMoviePopularData(limit: number) {
    return this.http.get(`${this.host}/service/movie/main/popular/${limit}`);
    //.map((response: Response) => response.json())
   // .catch(this.handleError);
  }

  getMovieRandomData(limit: number) {
    return this.http.get(`${this.host}/service/movie/main/random/${limit}`);
    //.map((response: Response) => response.json())
   // .catch(this.handleError);
  }

  getMovieLatestCategoryData(catid: number, itemid: number) {
    return this.http.get(`${this.host}/service/movie/category/${catid}/${itemid}`);
    //.map((response: Response) => response.json())
   // .catch(this.handleError);
  }

  getMoviePopularCategoryData(limit: number) {
    return this.http.get(`${this.host}/service/movie/main/random/${limit}`);
    //.map((response: Response) => response.json())
   // .catch(this.handleError);
  }

  getMovieRandomCategoryData(limit: number) {
    return this.http.get(`${this.host}/service/movie/main/random/${limit}`);
    //.map((response: Response) => response.json())
   // .catch(this.handleError);
  }

  getMovieVideo(id: number, catid: number, itemid: number) {
    return this.http.get(`${this.host}/service/movie/single/${id}/${catid}/${itemid}`);
    //.map((response: Response) => response.json())
   // .catch(this.handleError);
  }

  getMovieLatestSingleData(limit: number) {
    return this.http.get(`${this.host}/service/movie/main/random/${limit}`);
    //.map((response: Response) => response.json())
   // .catch(this.handleError);
  }

  getMoviePopularSingleData(limit: number) {
    return this.http.get(`${this.host}/service/movie/main/random/${limit}`);
    //.map((response: Response) => response.json())
   // .catch(this.handleError);
  }

  getMovieRandomSingleData(limit: number) {
    return this.http.get(`${this.host}/service/movie/main/random/${limit}`);
    //.map((response: Response) => response.json())
   // .catch(this.handleError);
  }

  // private handleError (error: any) {
  //   console.log(error);
  //   return Observable.throw(error);
  // }
}
