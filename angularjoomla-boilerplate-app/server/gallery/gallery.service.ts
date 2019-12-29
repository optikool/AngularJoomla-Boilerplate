import { Injectable, HttpService } from "@nestjs/common";
import { ServerSettings } from '../config/server.config';
import { GalleryRestConfig } from '../config/rest.config';
import { URLSearchParams } from 'url';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { Collection } from "../interfaces/gallery.interface";

@Injectable()
export class GalleryService {
    private url;
    private serverSettings;
    private restConfig;

    constructor(private readonly http: HttpService) {
        this.serverSettings = ServerSettings;
        this.restConfig = GalleryRestConfig;
        this.url = this.serverSettings.host + this.serverSettings.path;
    }

    /**
     * Gets all galleries
     */
    getGalleryAll(): Observable<Collection[]> {
        const params = new URLSearchParams(this.restConfig.galleryMain.query);
        const reqUrl = this.url + '?' + params.toString();

        return this.http.get(reqUrl)
            .pipe(
                map(response => response.data)
            );
    }

    /**
     * Gets all collections for a category
     * @param id Category Id
     * @param itemid Menu Id
     */
    getGalleries(id: number, itemid: number):Observable<Collection[]> {
        let params =  new URLSearchParams(this.restConfig.galleryCategory.query);
        params.append('id', id.toString());
        params.append('Itemid', itemid.toString());

        const reqUrl = this.url + '?' + params.toString();

        return this.http.get(reqUrl)
            .pipe(
                map(response => response.data)
            );
    }

    /**
     * Gets random array of collections
     * @param limit Limit how many random collections to return
     */
    getRandomGallery(limit: number):Observable<Collection[]> {
        let params =  new URLSearchParams(this.restConfig.galleryRandom.query);
        params.append('limit', limit.toString());

        const reqUrl = this.url + '?' + params.toString();

        return this.http.get(reqUrl)
            .pipe(
                map(response => response.data)
            );
    }

    /**
     * Gets a single collection
     * @param id Collection Id
     * @param catid Category Id
     * @param itemid Menu Item Id
     */
    getCollection(id: number, catid: number, itemid: number):Observable<Collection> {
        let params =  new URLSearchParams(this.restConfig.collection.query);
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
     * Gets popular galleries
     * @param limit Limit number of galleries to return
     */
    getPopularGallery(limit: number):Observable<Collection[]> {
        let params =  new URLSearchParams(this.restConfig.galleryPopular.query);
        params.append('limit', limit.toString());

        const reqUrl = this.url + '?' + params.toString();

        return this.http.get(reqUrl)
            .pipe(
                map(response => response.data)
            );
    }

    /**
     * Returns a random number of collections
     * @param limit Number of collections to return
     */
    getRandomCollection(limit: number):Observable<Collection[]> {
        let params =  new URLSearchParams(this.restConfig.galleryMain.query);
        params.append('sort', 'random');
        params.append('limit', limit.toString());

        const reqUrl = this.url + '?' + params.toString();

        return this.http.get(reqUrl)
            .pipe(
                map(response => response.data)
            );
    }
}