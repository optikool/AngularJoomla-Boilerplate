import { Controller, Get, Param } from "@nestjs/common";
import { BlogService } from './blog.service';
import { Observable } from "rxjs";
import { Movie } from "../interfaces/movie.interface";

@Controller('blog')
export class BlogController {
    constructor(private blogService: BlogService) {}

    @Get('all')
    getBlogAll(): Observable<any> {
        return this.blogService.getBlogAll();
    }

    @Get(':id')
    getBlog(@Param() params): Observable<any> {
        return this.blogService.getBlog(Number.parseInt(params.id));
    }
}