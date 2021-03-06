import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
import { VgBufferingModule } from 'videogular2/compiled/buffering';
import { VgStreamingModule } from 'videogular2/compiled/streaming';
import { ComponentsModule } from '../components/components.module';
import { MaterialsModule } from '../helpers/materials.module';
import { GalleryModulesModule } from './gallery/modules/gallery-modules.module';
import { VideosModulesModule } from './videos/modules/videos-modules.module';

@NgModule({
  declarations: [
  HomeComponent,
  PageNotFoundComponent
],
  imports: [
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
    ComponentsModule,
    GalleryModulesModule,
    VideosModulesModule,
    MaterialsModule
  ],
  exports: [
  ]
})
export class ViewsModule { }
