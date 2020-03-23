import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../directives/directives.module';
import { VideoCollectionsComponent } from './video/video-collections/video-collections.component';
import { VideoCollectionComponent } from './video/video-collection/video-collection.component';
import { VideoFceComponent } from './video/video-fce/video-fce.component';
import { GalleryCollectionsComponent } from './gallery/gallery-collections/gallery-collections.component';
import { GalleryCollectionComponent } from './gallery/gallery-collection/gallery-collection.component';
import { GalleryFceComponent } from './gallery/gallery-fce/gallery-fce.component';
import { MaterialsModule } from '../helpers/materials.module';
import { LoadingFullPageComponent } from "./widgets/loading-full-page/loading-full-page.component";
import { PrettyPhotoComponent } from "./widgets/pretty-photo/pretty-photo.component";
import { SliderWidgetComponent } from "./widgets/slider-widget/slider-widget.component";
import { TeaserWidgetPlaceholderComponent } from "./widgets/teaser-widget/teaser-widget-placeholder.component";
import { TeaserWidgetComponent } from "./widgets/teaser-widget/teaser-widget.component";
import { TotopWidgetComponent } from "./widgets/totop-widget/totop-widget.component";
import { TwitterWidgetComponent } from "./widgets/twitter-widget/twitter-widget.component";
import { WelcomeWidgetComponent } from "./widgets/welcome-widget/welcome-widget.component";


@NgModule({
  declarations: [
    VideoCollectionsComponent,
    VideoCollectionComponent,
    VideoFceComponent,
    GalleryCollectionsComponent,
    GalleryCollectionComponent,
    GalleryFceComponent,
    LoadingFullPageComponent,
    PrettyPhotoComponent,
    SliderWidgetComponent,
    TeaserWidgetPlaceholderComponent,
    TeaserWidgetComponent,
    TotopWidgetComponent,
    TwitterWidgetComponent,
    WelcomeWidgetComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    MaterialsModule
  ],
  exports: [
    VideoCollectionsComponent,
    VideoCollectionComponent,
    VideoFceComponent,
    GalleryCollectionsComponent,
    GalleryCollectionComponent,
    GalleryFceComponent,
    LoadingFullPageComponent,
    PrettyPhotoComponent,
    SliderWidgetComponent,
    TeaserWidgetPlaceholderComponent,
    TeaserWidgetComponent,
    TotopWidgetComponent,
    TwitterWidgetComponent,
    WelcomeWidgetComponent
  ]
})
export class ComponentsModule { }
