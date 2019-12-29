import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { GalleryModule } from './gallery/gallery.module';
import { MovieModule } from './movie/movie.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'dist/browser')
    }),
    GalleryModule,
    MovieModule,
    BlogModule

  ]
})
export class ApplicationModule {}
