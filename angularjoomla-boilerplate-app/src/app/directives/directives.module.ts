import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuDropdownDirective } from "./menu-dropdown.directive";
import { ScrollableDirective } from "./scrollable.directive";
import { WindowScrollDirective } from "./window-scroll.directive";

@NgModule({
    declarations: [
        MenuDropdownDirective,
        ScrollableDirective,
        WindowScrollDirective
    ],
    exports: [
        CommonModule,
        MenuDropdownDirective,
        ScrollableDirective,
        WindowScrollDirective
    ]
})
export class DirectivesModule {}