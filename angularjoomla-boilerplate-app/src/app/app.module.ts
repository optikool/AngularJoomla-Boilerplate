import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
import { VgBufferingModule } from 'videogular2/compiled/buffering';
import { VgStreamingModule } from 'videogular2/compiled/streaming';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { ModalsModule } from './modals/modals.module';
import { PipesModule } from './pipes/pipes.module';
import { ViewsModule } from './views/views.module';

import { ArticleEffect } from './store/article/article.effects';
import { GalleryEffect } from './store/gallery/gallery.effects';
import { MovieEffect } from './store/movie/movie.effects';
import { reducers } from './store/app.reducers';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GalleryService } from './services/gallery.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule,
    DirectivesModule,
    ModalsModule,
    PipesModule,
    ViewsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ArticleEffect, GalleryEffect, MovieEffect]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [DirectivesModule, GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
