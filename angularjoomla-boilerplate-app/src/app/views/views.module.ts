import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos/videos.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
  VideosComponent,
  GalleryComponent,
  HomeComponent,
  PageNotFoundComponent
],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class ViewsModule { }
