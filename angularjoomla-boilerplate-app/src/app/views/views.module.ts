import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos/videos.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
  VideosComponent,
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
