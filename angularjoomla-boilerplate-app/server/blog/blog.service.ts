import { Injectable, HttpService } from "@nestjs/common";
import { ServerSettings } from '../config/server.config';
import { ArticleRestConfig } from '../config/rest.config';
import { URLSearchParams } from 'url';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { Movie } from "../interfaces/movie.interface";

@Injectable()
export class BlogService {
    private url;
    private serverSettings;
    private restConfig;

    constructor(private readonly http: HttpService) {
        this.serverSettings = ServerSettings;
        this.restConfig = ArticleRestConfig;
        this.url = this.serverSettings.host + this.serverSettings.path;
    }

    getBlogAll(): Observable<any> {
        const params = new URLSearchParams(this.restConfig.articleCategory.query);
        const reqUrl = this.url + '?' + params.toString();

        return this.http.get(reqUrl)
            .pipe(
                map(response => response.data)
            );
    }

    getBlog(id: number): Observable<any> {
        let params =  new URLSearchParams(this.restConfig.article.query);
        params.append('id', id.toString());

        const reqUrl = this.url + '?' + params.toString();

        return this.http.get(reqUrl)
            .pipe(
                map(response => response.data)
            );
    }
}