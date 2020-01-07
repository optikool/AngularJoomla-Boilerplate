import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingFullPageComponent } from "./loading-full-page/loading-full-page.component";
import { PrettyPhotoComponent } from "./pretty-photo/pretty-photo.component";
import { SliderWidgetComponent } from "./slider-widget/slider-widget.component";
import { TeaserWidgetPlaceholderComponent } from "./teaser-widget/teaser-widget-placeholder.component";
import { TeaserWidgetComponent } from "./teaser-widget/teaser-widget.component";
import { TotopWidgetComponent } from "./totop-widget/totop-widget.component";
import { TwitterWidgetComponent } from "./twitter-widget/twitter-widget.component";
import { WelcomeWidgetComponent } from "./welcome-widget/welcome-widget.component";
import { SharedModule } from "./shared/shared.module";
import { PipesModule } from "../pipes/pipes.module";


@NgModule({
    declarations: [
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
        SharedModule,
        PipesModule
    ],
    exports: [
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
export class WidgetModule {}