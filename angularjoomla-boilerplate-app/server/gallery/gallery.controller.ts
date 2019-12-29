import { Controller, Get, Param } from "@nestjs/common";
import { GalleryService } from './gallery.service';
import { Observable } from "rxjs";
import { Collection } from "../interfaces/gallery.interface";

@Controller('gallery')
export class GalleryController {
    constructor(private galleryService: GalleryService) {}

    @Get('all')
    getGalleryAll():Observable<Collection[]> {
        return this.galleryService.getGalleryAll();
    }

    @Get('category/:id/:itemid')
    getGalleries(@Param() params):Observable<Collection[]> {
        return this.galleryService.getGalleries(Number.parseInt(params.id), Number.parseInt(params.itemid));
    }

    @Get('random/:limit')
    getRandomGallery(@Param() params):Observable<Collection[]> {
        return this.galleryService.getRandomGallery(Number.parseInt(params.limit));
    }

    @Get('single/:id/:catid/:itemid')
    getCollection(@Param() params):Observable<Collection> {
        return this.galleryService.getCollection(Number.parseInt(params.id), Number.parseInt(params.catid), Number.parseInt(params.itemid));
    }

    @Get('popular/:limit')
    getPopularGallery(@Param() params):Observable<Collection[]> {
        return this.galleryService.getPopularGallery(Number.parseInt(params.limit));
    }

    @Get('main/random/:limit')
    getRandomCollection(@Param() params):Observable<Collection[]> {
        return this.galleryService.getRandomCollection(Number.parseInt(params.limit));
    }
}
