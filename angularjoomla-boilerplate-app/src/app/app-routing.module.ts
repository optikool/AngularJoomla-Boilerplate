import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: "/gallery", loadChildren: () => import('./views/gallery/gallery.component').then(m => m.GalleryComponent)},
  { path: "/videos", loadChildren: () => import ('./views/videos/videos.component').then(m => m.VideosComponent)},
  { path: "/page-not-found", loadChildren: () => import('./views/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)},
  { path: "", component: HomeComponent },
  { path: "**", component: PageNotFoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
