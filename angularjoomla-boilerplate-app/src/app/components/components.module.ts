import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../directives/directives.module';
import { VideoCollectionsComponent } from './video/video-collections/video-collections.component';
import { VideoCollectionComponent } from './video/video-collection/video-collection.component';
import { VideoFceComponent } from './video/video-fce/video-fce.component';
import { GalleryCollectionsComponent } from './gallery/gallery-collections/gallery-collections.component';
import { GalleryCollectionComponent } from './gallery/gallery-collection/gallery-collection.component';
import { GalleryFceComponent } from './gallery/gallery-fce/gallery-fce.component';


@NgModule({
  declarations: [
  VideoCollectionsComponent,
  VideoCollectionComponent,
  VideoFceComponent,
  GalleryCollectionsComponent,
  GalleryCollectionComponent,
  GalleryFceComponent],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [
  ]
})
export class ComponentsModule { }
