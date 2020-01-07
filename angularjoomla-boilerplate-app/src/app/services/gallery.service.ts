import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GalleryService {
  private host: string;

  constructor(private http: HttpClient) { 
    this.host = 'http://localhost:4200/api';
  }

  formatUrls(data, mainLink: string, mainLinkThumb: string) {
    return data.map((item) => {
      item.src = `${mainLink}${item.image}`;
      item.thumb = `${mainLinkThumb}${item.thumb}`;

      return item;
    });
  }

  formatLightBox(data, mainLink: string, mainLinkThumb: string, folder: string) {
    return data.map((item) => {
      item.src = `${mainLink}${folder}/${item.name}`;
      item.thumb = `${mainLinkThumb}${folder}/${item.name}`;
      item.caption = item.name;

      return item;
    });
  }

  formatNgxLightBox(data, mainLink: string, mainLinkThumb: string, folder: string) {
    return data.map((item) => {
      return {
        url: `${mainLink}${folder}/${item.name}`,
        thumbnailUrl: `${mainLinkThumb}${folder}/${item.name}`,
        altText: item.name
      }
    });
  }

  getGalleryData(limit: number) {
    const listLimit: string = (limit <= 0) ? 'all' : limit.toString();

    return this.http.get(`${this.host}/gallery/${listLimit}`);
    //return this.http.get(this.host + '/service/gallery.json')
    //.map((response: Response) => response.json())
    //.catch(this.handleError);
  }

  getGalleryLatestData(limit: number) {
    return this.http.get(`${this.host}/gallery/main/${limit}`);
    //.map((response: Response) => response.json())
    //.catch(this.handleError);
  }

  getGalleryPopularData(limit: number) {
    return this.http.get(`${this.host}/gallery/main/popular/${limit}`);
    // .map((response: Response) => response.json())
    // .catch(this.handleError);
  }

  getGalleryRandomData(limit: number) {
    return this.http.get(`${this.host}/gallery/main/random/${limit}`);
    // .map((response: Response) => response.json())
    // .catch(this.handleError);
  }

  getGalleryLatestCategoryData(catid: number, itemid: number) {
    return this.http.get(`${this.host}/gallery/category/${catid}/${itemid}`);
    // .map((response: Response) => response.json())
    // .catch(this.handleError);
  }

  getGalleryPopularCategoryData(limit: number) {
    return this.http.get(`${this.host}/gallery/main/random/${limit}`);
    // .map((response: Response) => response.json())
    // .catch(this.handleError);
  }

  getGalleryRandomCategoryData(limit: number) {
    return this.http.get(`${this.host}/gallery/main/random/${limit}`);
    //.map((response: Response) => response.json())
   // .catch(this.handleError);
  }

  getGalleryCollection(id: number, catid: number, itemid: number) {
    return this.http.get(`${this.host}/gallery/single/${id}/${catid}/${itemid}`);
    //.map((response: Response) => response.json())
   // .catch(this.handleError);
  }

  getGalleryLatestSingleData(limit: number) {
    return this.http.get(`${this.host}/gallery/main/random/${limit}`);
    //.map((response: Response) => response.json())
   // .catch(this.handleError);
  }

  getGalleryPopularSingleData(limit: number) {
    return this.http.get(`${this.host}/gallery/main/random/${limit}`);
    //.map((response: Response) => response.json())
   // .catch(this.handleError);
  }

  getGalleryRandomSingleData(limit: number) {
    return this.http.get(`${this.host}/gallery/main/random/${limit}`);
    //.map((response: Response) => response.json())
   // .catch(this.handleError);
  }
}
