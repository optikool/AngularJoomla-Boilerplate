import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouselAnimationDirective } from "./carousel-animation.directive";
import { FancycaptionEffectDirective } from "./fancycaption-effect.directive";
import { MenuDropdownDirective } from "./menu-dropdown.directive";
import { ScrollableDirective } from "./scrollable.directive";
import { WindowScrollDirective } from "./window-scroll.directive";

@NgModule({
    declarations: [
        CarouselAnimationDirective,
        FancycaptionEffectDirective,
        MenuDropdownDirective,
        ScrollableDirective,
        WindowScrollDirective
    ],
    exports: [
        CommonModule,
        CarouselAnimationDirective,
        FancycaptionEffectDirective,
        MenuDropdownDirective,
        ScrollableDirective,
        WindowScrollDirective
    ]
})
export class SharedModule {}