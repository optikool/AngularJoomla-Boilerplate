import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { GalleryComponent } from './gallery.component';
import { GalleryMainComponent } from './gallery-main/gallery-main.component';
import { GalleryCategoryComponent } from './gallery-category/gallery-category.component';
import { GallerySingleComponent } from './gallery-single/gallery-single.component';
import { GalleryRoutingModule } from './gallery-routing.module';

@NgModule({
    declarations: [
      GalleryComponent,
      GalleryMainComponent,
      GalleryCategoryComponent,
      GallerySingleComponent
    ],
    imports: [
      CommonModule,
      GalleryRoutingModule
    ],
    providers: []

  })
  export class GalleryModule { }