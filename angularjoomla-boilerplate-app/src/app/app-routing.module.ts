import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: "gallery", loadChildren: () => import('./views/gallery/gallery.module').then(m => m.GalleryModule)},
  { path: "videos", loadChildren: () => import('./views/videos/videos.module').then(m => m.VideosModule)},
  { path: "", component: HomeComponent },
  { path: "**", component: PageNotFoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
