import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GalleryComponent } from "./gallery.component";
import { GalleryMainComponent } from "./gallery-main/gallery-main.component";
import { GalleryCategoryComponent } from "./gallery-category/gallery-category.component";
import { GallerySingleComponent } from "./gallery-single/gallery-single.component";

const galleryRoutes: Routes = [
    { path: '', component: GalleryComponent, children: [
        { path: '', component: GalleryMainComponent },
        { path: "category/:cid/:itemId", component: GalleryCategoryComponent },
        { path: "single/:cid/:id/:itemId", component: GallerySingleComponent }
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(galleryRoutes)],
    exports: [RouterModule]
})
export class GalleryRoutingModule {}