import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuDropdownDirective } from "./menu-dropdown.directive";
import { ScrollableDirective } from "./scrollable.directive";
import { WindowScrollDirective } from "./window-scroll.directive";
import { CarouselAnimationDirective } from './carousel-animation.directive';
import { FancycaptionEffectDirective } from './fancycaption-effect.directive';

@NgModule({
    declarations: [
        MenuDropdownDirective,
        ScrollableDirective,
        WindowScrollDirective,
        CarouselAnimationDirective,
        FancycaptionEffectDirective
    ],
    exports: [
        CommonModule,
        MenuDropdownDirective,
        ScrollableDirective,
        WindowScrollDirective,
        CarouselAnimationDirective,
        FancycaptionEffectDirective
    ]
})
export class DirectivesModule {}