import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FancyCaptionMovieComponent } from "./fancy-caption-movie/fancy-caption-movie.component";
import { VideosCollectionComponent } from "./videos-collection/videos-collection.component";
import { VideosCollectionsComponent } from "./videos-collections/videos-collections.component";
import { VideosFceComponent } from "./videos-fce/videos-fce.component";
import { PipesModule } from "../../../pipes/pipes.module";
import { MaterialsModule } from '../../../helpers/materials.module';

@NgModule({
    declarations: [
        FancyCaptionMovieComponent,
        VideosCollectionComponent,
        VideosCollectionsComponent,
        VideosFceComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        PipesModule,
        MaterialsModule
    ],
    exports: [
        FancyCaptionMovieComponent,
        VideosCollectionComponent,
        VideosCollectionsComponent,
        VideosFceComponent
    ]
})
export class VideosModulesModule {}