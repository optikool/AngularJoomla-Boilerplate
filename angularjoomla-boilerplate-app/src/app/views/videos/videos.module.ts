import { NgModule } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
// import { SharedModule } from '../../widgets/shared/shared.module';
// import { WidgetModule } from '../../widgets/widget.module';
import { HomeSharedModule } from '../home/shared/home-shared.module';
import { PipesModule } from '../../pipes/pipes.module';
// import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { VideosComponent } from './videos.component';
import { VideosMainComponent } from './videos-main.component';
import { VideosCategoryComponent } from './videos-category.component';
import { VideosSingleComponent } from './videos-single.component';
import { VideosRoutingModule } from './videos-routing.module';
import { VideosModulesModule } from './modules/videos-modules.module';
// import { EmbedVideo } from 'ngx-embed-video/dist';
// import { VgCoreModule } from 'videogular2/core';
// import { VgControlsModule } from 'videogular2/controls';
// import { VgOverlayPlayModule } from 'videogular2/overlay-play';
// import { VgBufferingModule } from 'videogular2/buffering';
// import { VgStreamingModule } from 'videogular2/streaming';

@NgModule({
    declarations: [
      VideosComponent,
      VideosMainComponent,
      VideosCategoryComponent,
      VideosSingleComponent
    ],
    imports: [
      CommonModule,
      //HttpClient,
      HttpClientModule,
      VideosRoutingModule,
      // SharedModule,
      // WidgetModule,
      PipesModule,
      // NgxImageGalleryModule,
      VideosModulesModule,
      HomeSharedModule,
      // VgCoreModule,
      // VgControlsModule,
      // VgOverlayPlayModule,
      // VgBufferingModule,
      // VgStreamingModule,
      // EmbedVideo
    ],
    providers: []
  })
  export class VideosModule { }