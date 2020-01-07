import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VideosComponent } from "./videos.component";
import { VideosMainComponent } from "./videos-main.component";
import { VideosCategoryComponent } from "./videos-category.component";
import { VideosSingleComponent } from "./videos-single.component";

const videosRoutes: Routes = [
    { path: '', component: VideosComponent, children: [
        { path: '', component: VideosMainComponent },
        { path: "category/:cid/:itemId", component: VideosCategoryComponent },
        { path: "single/:cid/:id/:itemId", component: VideosSingleComponent }
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(videosRoutes)],
    exports: [RouterModule]
})
export class VideosRoutingModule {}