import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouselAnimationDirective } from "./carousel-animation.directive";
import { FancycaptionSlidetopDirective } from "./fancycaption-slidetop.directive";
import { MenuDropdownDirective } from "./menu-dropdown.directive";
import { ScrollableDirective } from "./scrollable.directive";
import { WindowScrollDirective } from "./window-scroll.directive";

@NgModule({
    declarations: [
        CarouselAnimationDirective,
        FancycaptionSlidetopDirective,
        MenuDropdownDirective,
        ScrollableDirective,
        WindowScrollDirective
    ],
    exports: [
        CommonModule,
        CarouselAnimationDirective,
        FancycaptionSlidetopDirective,
        MenuDropdownDirective,
        ScrollableDirective,
        WindowScrollDirective
    ]
})
export class SharedModule {}