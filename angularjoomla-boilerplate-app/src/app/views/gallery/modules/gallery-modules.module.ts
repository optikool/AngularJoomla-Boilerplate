import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
// import { NgxImageGalleryModule } from "ngx-image-gallery";
import { SharedModule } from "../../../widgets/shared/shared.module";
import { FancyCaptionSingleComponent } from "./fancy-caption-single/fancy-caption-single.component";
import { GalleryCollectionComponent } from "./gallery-collection/gallery-collection.component";
import { GalleryCollectionsComponent } from "./gallery-collections/gallery-collections.component";
import { GalleryFceComponent } from "./gallery-fce/gallery-fce.component";

@NgModule({
    declarations: [
        FancyCaptionSingleComponent,
        GalleryCollectionComponent,
        GalleryCollectionsComponent,
        GalleryFceComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
        // NgxImageGalleryModule
    ],
    exports: [
        FancyCaptionSingleComponent,
        GalleryCollectionComponent,
        GalleryCollectionsComponent,
        GalleryFceComponent
    ]
})
export class GalleryModulesModule {}